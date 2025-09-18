# Phil Gengenbach's Portfolio – DevOne Hack 2025 Submission

This portfolio was created as part of the **DevOne Hack 2025**, a hackathon focused on building modern, personal, and interactive developer portfolios.  

The goal was not only to showcase my projects and skills, but also to build a **future-ready digital identity** with smooth animations, responsive design, and a custom deployment setup.

## Hackathon Context

- **Event:** DevOne Hack 2025 – *Build Your Developer Portfolio*
- **Theme:** Empowering developers to present their skills and style through interactive websites
- **Focus of my project:** A clean, responsive portfolio with engaging animations and a self-hosted infrastructure setup

## Technologies Used

- **Next.js**: React-based framework for building interactive, fast websites
- **JavaScript**: Core programming language of the project
- **Framer Motion**: Library for smooth animations and transitions
- **nginx**: Reverse proxy for reliable server setup
- **Cloudflare**: SSL, security, and performance optimization

## Features

- Animated hero section with typing effects
- Project cards with hover animations and GitHub/Live links
- Interactive skills section with badges and icons
- Fully responsive design (desktop, tablet, mobile)
- Custom hosting setup with nginx + Cloudflare

## Live Demo

🌐 Check it out here: [https://philgen.de](https://philgen.de)

## Getting Started (Local Development)

1. Clone the repository:
   ```bash
   git clone https://github.com/philgenb/DevOneHack.git
   ```
2. Navigate to the project directory:
   ```bash
   cd portfolio
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

The project is deployed on a virtual server and uses **nginx** as a reverse proxy, with **Cloudflare** providing SSL and extra security.  

1. Build the project for production:
   ```bash
   npm run build
   ```
2. Start the application:
   ```bash
   npm start
   ```

### Example Nginx Configuration

```nginx
server {
    listen 80;
    server_name phil.gen www.phil.gen;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)  
- [Framer Motion Documentation](https://www.framer.com/motion/)  
- [Cloudflare Documentation](https://developers.cloudflare.com/)  
- [nginx Documentation](https://nginx.org/en/docs/)  

---

📌 *Built with ❤️ for DevOne Hack 2025 – showcasing my projects, skills, and digital identity as a developer.*
