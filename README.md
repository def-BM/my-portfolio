# 🌐 Personal Portfolio Website

This is my **personal portfolio website**, built using **React.js**, to showcase my projects, certifications, skills, resume, and contact information.  
The website is fully responsive and deployed using **GitHub Pages**.

🔗 **Live Portfolio:**  
👉 https://def-bm.github.io/my-portfolio/

---

## 🚀 Features

- 🧑‍💻 About Me section  
- 💼 Projects with GitHub links  
- 🏆 Certificates gallery  
- 📄 Resume download button  
- 📬 Contact details  
- ⚡ Fully responsive UI  
- 🌐 Hosted on GitHub Pages

---

## 🛠️ Tech Stack

| Category    | Technologies Used |
|-------------|------------------|
| Frontend    | React.js, JavaScript, HTML5, CSS3 |
| Deployment  | GitHub Pages (`gh-pages`) |
| Libraries   | React Router, react-icons (optional) |

---

## 📂 Folder Structure

my-portfolio/
├── public/
│ ├── Photo.jpeg
│ ├── img1.jpeg
│ ├── certificate1.pdf
│ ├── certificate2.pdf
│ └── MyResume.pdf
├── src/
│ ├── components/
│ ├── pages/
│ ├── App.js
│ └── index.js
└── package.json


> All images and certificate files are stored inside the `public/` folder.

---

## 🔧 Running the Project Locally

```bash
git clone https://github.com/def-BM/my-portfolio.git
cd my-portfolio
npm install
npm start
This will start the project at:
🔗 http://localhost:3000

🔗 Deployment
Project is deployed using gh-pages.

Install:
npm install gh-pages --save-dev

Add to package.json:
"homepage": "https://def-BM.github.io/my-portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}

Deploy:
npm run deploy
📌 Future Improvements
Add dark/light theme

Add animations (Framer Motion)

Add email contact form

Add blog / achievements section

👤 Author
Brijesh Maurya
📍 React Developer | ML Enthusiast

🔗 Portfolio — https://def-bm.github.io/my-portfolio/
📧 Email — brijesh27m@gmail.com
