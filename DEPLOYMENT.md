# 🚀 دليل التشغيل الكامل — Stirling PDF Free Frontend

## المتطلبات

- خادم (VPS / سحابي / محلي) بمواصفات:
  - RAM: 2 GB+ (4 GB مستحسن)
  - CPU: 2 cores+
  - مساحة: 5 GB+
  - نظام: Linux (Ubuntu 22.04+ / Debian 12+ / CentOS 9+)
- Docker + Docker Compose (أو Java 25 + أدوات النظام)
- اسم نطاق (Domain) — اختياري لكن مستحسن

---

## الطريقة 1: Docker (الأسهل والمستحسنة) ⭐

### الخطوة 1: تثبيت Docker

```bash
# Ubuntu / Debian
curl -fsSL https://get.docker.com | sh
sudo usermod -aG docker $USER
# أعد تسجيل الدخول بعدها
```

### الخطوة 2: إنشاء ملف docker-compose.yml

```bash
mkdir -p ~/stirling-pdf && cd ~/stirling-pdf
```

أنشئ ملف `docker-compose.yml`:

```yaml
services:
  # ===== Backend: Stirling-PDF Engine =====
  stirling-backend:
    image: stirlingtools/stirling-pdf:latest
    container_name: stirling-backend
    restart: unless-stopped
    ports:
      - "8080:8080"
    volumes:
      - ./data/tessdata:/usr/share/tessdata:rw
      - ./data/config:/configs:rw
      - ./data/logs:/logs:rw
    environment:
      # ====== مهم: تعطيل الخواص المرخصة ======
      DISABLE_ADDITIONAL_FEATURES: "true"
      SECURITY_ENABLELOGIN: "false"
      
      # إعدادات عامة
      SYSTEM_DEFAULTLOCALE: "en-US"
      UI_APPNAME: "Stirling-PDF"
      SYSTEM_MAXFILESIZE: "200"
      SYSTEM_ENABLEURLTOPDFILE: "true"
      
      # CORS - السماح للـ Frontend بالاتصال
      SYSTEM_ENABLEALLTYPECONVERSIONS: "true"
    healthcheck:
      test: ["CMD-SHELL", "curl -f http://localhost:8080/api/v1/info/status | grep -q 'UP'"]
      interval: 10s
      timeout: 5s
      retries: 10
      start_period: 60s
    networks:
      - pdf-network

  # ===== Frontend: واجهة المستخدم =====
  stirling-frontend:
    image: nginx:alpine
    container_name: stirling-frontend
    restart: unless-stopped
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./frontend:/usr/share/nginx/html:ro
      - ./nginx.conf:/etc/nginx/conf.d/default.conf:ro
      # لو عندك SSL:
      # - ./ssl/cert.pem:/etc/nginx/ssl/cert.pem:ro
      # - ./ssl/key.pem:/etc/nginx/ssl/key.pem:ro
    depends_on:
      stirling-backend:
        condition: service_healthy
    networks:
      - pdf-network

networks:
  pdf-network:
    driver: bridge
```

### الخطوة 3: إنشاء ملف Nginx

أنشئ ملف `nginx.conf`:

```nginx
server {
    listen 80;
    server_name _;  # غيّر إلى اسم النطاق الخاص بك
    
    # Frontend files
    root /usr/share/nginx/html;
    index preview.html;
    
    # Frontend SPA
    location / {
        try_files $uri $uri/ /preview.html;
    }

    # Proxy API requests to backend
    location /api/ {
        proxy_pass http://stirling-backend:8080/api/;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        
        # رفع الحد الأقصى لحجم الملف
        client_max_body_size 200M;
        
        # طول وقت الانتظار للمعالجة
        proxy_read_timeout 300s;
        proxy_send_timeout 300s;
    }

    # Swagger UI (اختياري)
    location /swagger-ui/ {
        proxy_pass http://stirling-backend:8080/swagger-ui/;
        proxy_set_header Host $host;
    }
    location /v1/api-docs {
        proxy_pass http://stirling-backend:8080/v1/api-docs;
        proxy_set_header Host $host;
    }

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
        expires 7d;
        add_header Cache-Control "public, immutable";
    }

    # Security headers
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
}
```

### الخطوة 4: تنزيل Frontend

```bash
mkdir -p frontend

# تنزيل ملف preview.html المحدث
curl -o frontend/preview.html \
  https://raw.githubusercontent.com/lata015das-hue/https-github.com-Stirling-Tools-Stirling-PDF/main/preview.html
```

**مهم:** عدّل `BACKEND_URL` في الملف ليكون فارغاً (لأن Nginx سيتولى الـ proxy):

```bash
sed -i "s|let BACKEND_URL = 'http://localhost:8080';|let BACKEND_URL = '';|" frontend/preview.html
sed -i "s|let DEMO_MODE = true;|let DEMO_MODE = false;|" frontend/preview.html
```

### الخطوة 5: تشغيل كل شيء

```bash
docker compose up -d
```

### الخطوة 6: التحقق

```bash
# تحقق من حالة الخدمات
docker compose ps

# تحقق من Backend
curl http://localhost:8080/api/v1/info/status

# افتح في المتصفح
echo "الموقع جاهز على: http://YOUR_SERVER_IP"
```

---

## الطريقة 2: مع SSL (HTTPS) + اسم نطاق

### أضف Certbot (Let's Encrypt)

```bash
# ثبّت certbot
sudo apt install certbot

# احصل على شهادة
sudo certbot certonly --standalone -d your-domain.com

# انسخ الشهادات
mkdir -p ssl
sudo cp /etc/letsencrypt/live/your-domain.com/fullchain.pem ssl/cert.pem
sudo cp /etc/letsencrypt/live/your-domain.com/privkey.pem ssl/key.pem
sudo chmod 644 ssl/*
```

عدّل `nginx.conf` ليشمل HTTPS:

```nginx
server {
    listen 80;
    server_name your-domain.com;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl;
    server_name your-domain.com;
    
    ssl_certificate /etc/nginx/ssl/cert.pem;
    ssl_certificate_key /etc/nginx/ssl/key.pem;
    ssl_protocols TLSv1.2 TLSv1.3;
    
    # ... باقي الإعدادات كما سبق ...
    root /usr/share/nginx/html;
    index preview.html;
    
    location / {
        try_files $uri $uri/ /preview.html;
    }
    
    location /api/ {
        proxy_pass http://stirling-backend:8080/api/;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        client_max_body_size 200M;
        proxy_read_timeout 300s;
    }
}
```

فعّل volumes الـ SSL في `docker-compose.yml`:

```yaml
    volumes:
      - ./frontend:/usr/share/nginx/html:ro
      - ./nginx.conf:/etc/nginx/conf.d/default.conf:ro
      - ./ssl/cert.pem:/etc/nginx/ssl/cert.pem:ro
      - ./ssl/key.pem:/etc/nginx/ssl/key.pem:ro
```

---

## الطريقة 3: بدون Docker (يدوياً)

### الخطوة 1: تثبيت Java 21+ وأدوات النظام

```bash
# Java
sudo apt install openjdk-21-jdk -y

# أدوات PDF
sudo apt install -y tesseract-ocr libreoffice-writer ghostscript \
  qpdf ocrmypdf python3-pip nginx

# Tesseract language packs
sudo apt install -y tesseract-ocr-ara tesseract-ocr-eng tesseract-ocr-fra
```

### الخطوة 2: بناء Backend

```bash
git clone https://github.com/Stirling-Tools/Stirling-PDF.git
cd Stirling-PDF

# بناء بدون الخواص المرخصة
DISABLE_ADDITIONAL_FEATURES=true ./gradlew :stirling-pdf:bootJar -x test

# الناتج:
ls app/core/build/libs/*.jar
```

### الخطوة 3: تشغيل Backend كخدمة

```bash
# أنشئ ملف خدمة systemd
sudo tee /etc/systemd/system/stirling-pdf.service << 'EOF'
[Unit]
Description=Stirling PDF Backend
After=network.target

[Service]
Type=simple
User=stirling
WorkingDirectory=/opt/stirling-pdf
ExecStart=/usr/bin/java -jar stirling-pdf.jar
Environment=DISABLE_ADDITIONAL_FEATURES=true
Environment=SECURITY_ENABLELOGIN=false
Environment=SYSTEM_MAXFILESIZE=200
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
EOF

# أنشئ المستخدم والمجلد
sudo useradd -r -s /bin/false stirling
sudo mkdir -p /opt/stirling-pdf
sudo cp app/core/build/libs/*.jar /opt/stirling-pdf/stirling-pdf.jar
sudo chown -R stirling:stirling /opt/stirling-pdf

# شغّل الخدمة
sudo systemctl daemon-reload
sudo systemctl enable --now stirling-pdf
```

### الخطوة 4: إعداد Nginx

```bash
# ضع Frontend files
sudo mkdir -p /var/www/stirling-pdf
sudo cp preview.html /var/www/stirling-pdf/index.html

# إعداد Nginx site
sudo tee /etc/nginx/sites-available/stirling-pdf << 'EOF'
server {
    listen 80;
    server_name your-domain.com;
    
    root /var/www/stirling-pdf;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    location /api/ {
        proxy_pass http://127.0.0.1:8080/api/;
        client_max_body_size 200M;
        proxy_read_timeout 300s;
    }
}
EOF

sudo ln -s /etc/nginx/sites-available/stirling-pdf /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
```

---

## 📋 قائمة التحقق بعد التشغيل

- [ ] `http://YOUR-DOMAIN/` يعرض الواجهة الرئيسية
- [ ] البحث عن أدوات يعمل
- [ ] رفع ملف PDF يعمل
- [ ] معالجة (مثل Merge أو Compress) تنجح
- [ ] تحميل الناتج يعمل
- [ ] `http://YOUR-DOMAIN/api/v1/info/status` يرجع "UP"
- [ ] الأدوات المرخصة **لا تعمل** (403 إذا حاولت الوصول يدوياً)

---

## 🔧 الصيانة

```bash
# تحديث Backend
docker compose pull && docker compose up -d

# مشاهدة السجلات
docker compose logs -f stirling-backend

# إعادة التشغيل
docker compose restart

# النسخ الاحتياطي
tar -czf backup-$(date +%F).tar.gz data/
```

---

## 🌍 خيارات الاستضافة المقترحة

| الخدمة | التكلفة/شهر | RAM | ملاحظات |
|--------|-------------|-----|---------|
| Hetzner CX22 | $4.5 | 4 GB | أرخص خيار أوروبي |
| DigitalOcean Basic | $6 | 1 GB | قد يكون ضيقاً |
| DigitalOcean Regular | $12 | 2 GB | مستحسن |
| AWS Lightsail | $10 | 2 GB | سهل الإعداد |
| Oracle Cloud Free | $0 | 24 GB ARM | مجاني! (4 cores ARM) |
| Contabo VPS | $7 | 8 GB | أفضل قيمة |

---

## ⚡ ملخص سريع (نسخ/لصق)

```bash
# === تشغيل كامل في 5 دقائق ===
mkdir -p ~/stirling-pdf/frontend && cd ~/stirling-pdf

# 1. تنزيل Frontend
curl -o frontend/preview.html https://raw.githubusercontent.com/lata015das-hue/https-github.com-Stirling-Tools-Stirling-PDF/main/preview.html
sed -i "s|let BACKEND_URL = 'http://localhost:8080';|let BACKEND_URL = '';|" frontend/preview.html
sed -i "s|let DEMO_MODE = true;|let DEMO_MODE = false;|" frontend/preview.html

# 2. إنشاء docker-compose.yml (انسخ من أعلى)
# 3. إنشاء nginx.conf (انسخ من أعلى)

# 4. تشغيل
docker compose up -d

# 5. تحقق
echo "الموقع جاهز: http://$(curl -s ifconfig.me)"
```
