# Phil Gengenbach's Portfolio

This is a portfolio showcasing some of my projects as a software developer. It is built with **Next.js**, **JavaScript**, and **Framer Motion**. The project is hosted on a virtual server using **nginx** as a reverse proxy with **Cloudflare** for SSL and security enhancements.

## Technologies Used

- **Next.js**: React-based framework for server-side rendering and static websites.
- **JavaScript**: Main programming language used in the project.
- **Framer Motion**: Library for animations and visual transitions.
- **nginx**: Web server used as a reverse proxy.
- **Cloudflare**: Used for SSL and performance/security improvements.

## Live Demo

The portfolio is live and accessible at: [https://phil.gen](https://phil.gen)

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repository-url.git
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
5. Open http://localhost:3000 in your browser to see the result.

## Deployment
The project is deployed on a virtual server and uses nginx as a reverse proxy along with Cloudflare for SSL and security features. To deploy the project, follow these steps:
1. Build the project for production:
    ```bash
    npm run build
    ```
2. Start the application in production mode:
    ```bash
    npm start
    ```

### Nginx Configuration Example

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
To learn more about the technologies used, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
- [Framer Motion Documentation](https://www.framer.com/motion/) - Learn about animations with Framer Motion.
- [Cloudflare Documentation](https://developers.cloudflare.com/) - Learn about Cloudflare services.
- [nginx Documentation](https://nginx.org/en/docs/) - Learn about nginx configuration and features.