const About = ()=>{
    return(
        <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full min-h-[calc(100vh-60px)] bg-[#e1dfca] px-4 py-2">
            <p className="w-full md:max-w-[55%] text-left font-semibold"><span className="block text-lg font-bold">About Web Frame</span>
Welcome to Web Frame, your go-to tool for capturing high-quality, customizable website snapshots. Whether you're a designer, developer, or content creator, Web Frame offers precision, versatility, and simplicity to meet your needs.

With Web Frame, users can take full-page screenshots or choose from a variety of mobile and desktop views, making it easy to showcase websites across different devices. For mobile snapshots, you can select from multiple device types, while desktop screenshots allow for custom resolutions and dimensions—ensuring every image is tailored to your project’s requirements.

Why Web Frame?

Designed for Designers: Web Frame is perfect for designers who need crisp, accurate screenshots for mockups, presentations, or portfolios. Easily capture the look and feel of any website to integrate into your creative work.

Developer-Friendly: Web developers can use Web Frame to quickly capture full-page views of websites or simulate mobile and desktop screens for testing and demonstration purposes.

Customization: With options to select device types for mobile and specify dimensions for desktop, you have complete control over how your screenshots are captured and displayed.

High-Quality Downloads: Ensure that every screenshot is downloaded in high resolution, maintaining the quality you need for your projects.

How it Works

Web Frame is powered by cutting-edge technologies:

Vite and React.js deliver a fast, smooth front-end experience.
Axios ensures efficient API interactions, making requests seamless.
Node.js (Express) and Puppeteer handle the heavy lifting of browser automation, capturing snapshots from real browser environments.
The backend is hosted on a high-performance VPS, ensuring fast, reliable service.
Styled with Tailwind CSS, Web Frame offers a sleek, intuitive, and responsive interface.
Our mission is to provide a hassle-free experience for professionals looking to capture accurate and high-quality website snapshots, with the flexibility and control to tailor every image to their needs.

Whether you're preparing a client presentation, building a portfolio, or testing responsive designs, Web Frame is here to streamline the process.</p>
            <img className="max-w-[80%] md:max-w-[40%]" src="/About.png"/>

        </div>
    )
}
export default About
