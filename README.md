
## 📚✨ Library Management System (MERN Stack)

Bu proje, **MERN Stack (MongoDB, Express.js, React, Node.js)** kullanılarak geliştirilmiş, hem öğretici hem de keyifli bir **kitap yönetim uygulamasıdır**

📖💚Amaç; kitap ekleme, listeleme ve kitaplar üzerinde temel kütüphane işlemlerini (ödünç alma, geri verme, silme) uçtan uca yönetebilmektir.

---

## 🚀 Proje Özeti:

Uygulama iki ana ana sayfadan oluşur:

📋 **Book List (Tablo Görünümü)**
Kütüphanedeki tüm kitaplar burada listelenir, işlemler buradan yapılır.

📝 **Add Book (Form Sayfası)**
Yeni kitapları sisteme eklemek için kullanılan form ekranıdır.

Navbar üzerindeki linkler sayesinde sayfalar arasında akıcı bir geçiş sağlanır 🔗✨

---

## 🧱 Kullanılan Teknolojiler:

### 🎨 Frontend (React)

* ⚛️ React **19.2.3**
* 🧭 React Router DOM **7.10.1**
* 🔗 Axios **1.13.2**
* 🎨 Bootstrap **5.3.8**
* 🛠️ React Scripts **5.0.1**

📌 Frontend tarafında `proxy` kullanılarak backend istekleri doğrudan yapılmıştır:

```json
"proxy": "http://localhost:5000"
```

Bu sayede axios / fetch isteklerinde ekstra base URL tanımlamaya gerek kalmaz 🚀

---

### 🧠 Backend (Node & Express):

* 🟢 Node.js
* 🚀 Express **5.2.1**
* 🍃 MongoDB
* 🧩 Mongoose **9.0.1**
* 🌐 CORS **2.8.5**
* 📦 Body-Parser **2.2.1**
* 🔄 Nodemon **3.1.11**

Backend tarafı **CommonJS** yapısı ile geliştirilmiştir.

---

## 🔌 API & HTTP Metotları:

Backend tarafında REST prensiplerine uygun olarak aşağıdaki endpoint’ler geliştirilmiştir:

### 📥 GET – Tüm Kitaplar:

```http
GET /books
```

📚 Veritabanındaki tüm kitapları listeler.

---

### ➕ POST – Yeni Kitap Ekleme:

```http
POST /newbook
```

🆕 Body üzerinden gönderilen kitap bilgilerini kaydeder.

---

### ❌ DELETE – Kitap Silme:

```http
DELETE /delete/:id
```

🗑️ ID’ye göre kitabı sistemden siler (kullanıcı onayı ile).

---

### 📉 PUT – Borrow (Ödünç Alma):

```http
PUT /borrow/:id
```

* 📦 Kitap adedini **1 azaltır**
* 🚫 Stok 0 ise işlem engellenir

---

### 📈 PUT – Return (Geri Verme):

```http
PUT /return/:id
```

* 📥 Kitap adedini **1 artırır**

---

## ⚙️ İş Akışı (Process):

Her kitap için tabloda **4 aşamalı bir işlem süreci** bulunur:

### 👀 1️⃣ View:

* Kitabın detaylarını görüntüler
* Açıklama ve yorum bilgileri gösterilir

### 📉 2️⃣ Borrow:

* Kitap ödünç verilir
* **Quantity** değeri 1 azaltılır
* Stok 0 ise işlem yapılamaz

### 📈 3️⃣ Return:

* Kitap geri alınır
* **Quantity** değeri 1 artırılır

### 🗑️ 4️⃣ Delete:

* Kitap sistemden tamamen silinir
* İşlem öncesi kullanıcıdan onay alınır

---

## 📝 Add Book Form Özellikleri:

Form ekranında aşağıdaki alanlar bulunmaktadır:

* 📘 Book Name
* ✍️ Author Name
* 📅 Publish Year
* 🗂️ Department
* 📝 Description
* 💬 Comments
* 🖼️ Cover Image URL
* 🔢 Quantity

Tüm inputlar **controlled component** mantığıyla yönetilmektedir.

---

## 📊 Books Table Özellikleri:

* Kitaplar tablo formatında listelenir
* Her satırda:

  * 🆔 Kısaltılmış kitap ID
  * 📕 Kitap adı
  * ✍️ Yazar
  * 🗂️ Bölüm
  * 🔢 Mevcut adet
  * ⚙️ Process butonları (View / Borrow / Return / Delete)

---

## 📚 Örnek Kitap Verileri:

Projede test ve demo amacıyla aşağıdaki kitaplar kullanılmıştır:

* **Masumiyet Müzesi** – Orhan Pamuk 🏛️
* **Tutunamayanlar** – Oğuz Atay 🧠
* **Kürk Mantolu Madonna** – Sabahattin Ali 💔
* **1984** – George Orwell 👁️
* **Sapiens** – Yuval Noah Harari 🌍
* **Clean Code** – Robert C. Martin 💻

Bu kitaplar farklı kategorilerden seçilerek sistemin esnekliği test edilmiştir.

---

## 🧠 Bu Projede Neler Öğrendim?:

* RESTful API endpoint geliştirme
* MongoDB & Mongoose ile schema yönetimi
* HTTP metotlarının gerçek senaryolarda kullanımı
* React Router ile sayfa yönlendirme
* Controlled form yapıları
* Borrow / Return işlemlerinde **state + backend senkronizasyonu**
* Kullanıcı onayı ile güvenli silme işlemleri

---

## ▶️ Projeyi Çalıştırma:

### 🧠 Backend

```bash
cd backend
npm install
npm run dev
```

➡️ Sunucu varsayılan olarak **5000** portunda çalışır.

---

### 🎨 Frontend:

```bash
cd frontend
npm install
npm start
```

➡️ Frontend, `proxy` üzerinden backend’e bağlanır.

---

## 🌱 Geliştirme Fikirleri:

* 🔐 Authentication (Admin / User)
* 👥 Borrow işlemleri için kullanıcı takibi
* 🔍 Arama & filtreleme
* 🔔 Toast notification entegrasyonu
* 📱 Responsive tablo iyileştirmeleri

---

## 👩‍💻 Geliştirici:

**Esra Akgündoğdu**
Frontend Developer | MERN Stack Learner

---

Bu proje, backend mantığını pekiştirmek ve frontend–backend entegrasyonunu gerçek bir senaryo üzerinden deneyimlemek amacıyla geliştirilmiştir 🚀📘

---

## 📬 İletişim:

Her türlü geri bildirim, öneri veya iş birliği için benimle iletişime geçebilirsiniz ✨

📧 Email: akgundogduesr@gmail.com

💼 LinkedIn: linkedin.com/in/esra-akgundogdu (isteğe bağlı ekleyebilirsin)

 ---

## 🖼️ Ekran Görüntüleri:

Aşağıda uygulamaya ait bazı ekran görüntülerini bulabilirsiniz:

🏠 Landing Page – Uygulamanın giriş ekranı :

<img width="1904" height="918" alt="landing page" src="https://github.com/user-attachments/assets/12458539-776d-436d-98b5-f5e68be81730" />

 ---

📋 Explore Books – Kitapların listelendiği tablo görünümü:

https://github.com/user-attachments/assets/4246b487-1d17-4aad-8026-1c3c577de0c1 

 ---

📝 Publish New Title – Yeni kitap ekleme formu:

https://github.com/user-attachments/assets/cb543e52-fdd0-48a8-9b4d-403f9d6937c6
















































