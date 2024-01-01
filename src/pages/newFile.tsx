import Layout from "../layouts/Layout.astro";
import Card from "../components/Card.astro";
import Navbar from "../components/navbar.tsx";
import AboutMe from "../components/AboutMe.astro";

<Fragment>
<Layout title="Welcome to Astro.">
<Navbar client:load />

<main>
<div class="max-w-[1300px] mx-auto mt-20">
<div class="row-span-2 col-span-2 fd:row-span-4 lg:row-span-2 lg:col-span-2 rounded-xl border-slate-400/10 p-4 bg-[#18111f8a] border-2 bg-radial-gradient-farthest">
<AboutMe />
</div>
<div class="class=" {...{ "row-span-2": true, "col-span-2": true, "fd:row-span-4": true, "lg:row-span-2": true, "lg:col-span-2": true, "rounded-xl": true, "border-slate-400": true, "10": true, "p-4": true, "bg-[#18111f8a]": true, "border-2": true, "bg-radial-gradient-farthest": ":true}} ><Knowledge /></div>" }} />

</div>
<svg class="astro-a" width="495" height="623" viewBox="0 0 495 623" fill="none" xmlns="http://www.w3.org/2000/svg" {...{ "aria-hidden": "true" }}>
<path d="M167.19 364.254C83.4786 364.254 0 404.819 0 404.819C0 404.819 141.781 19.4876 142.087 18.7291C146.434 7.33701 153.027 0 162.289 0H332.441C341.703 0 348.574 7.33701 352.643 18.7291C352.92 19.5022 494.716 404.819 494.716 404.819C494.716 404.819 426.67 364.254 327.525 364.254L264.41 169.408C262.047 159.985 255.147 153.581 247.358 153.581C239.569 153.581 232.669 159.985 230.306 169.408L167.19 364.254ZM160.869 530.172C160.877 530.18 160.885 530.187 160.894 530.195L160.867 530.181C160.868 530.178 160.868 530.175 160.869 530.172ZM136.218 411.348C124.476 450.467 132.698 504.458 160.869 530.172C160.997 529.696 161.125 529.242 161.248 528.804C161.502 527.907 161.737 527.073 161.917 526.233C165.446 509.895 178.754 499.52 195.577 500.01C211.969 500.487 220.67 508.765 223.202 527.254C224.141 534.12 224.23 541.131 224.319 548.105C224.328 548.834 224.337 549.563 224.347 550.291C224.563 566.098 228.657 580.707 237.264 593.914C245.413 606.426 256.108 615.943 270.749 622.478C270.593 621.952 270.463 621.508 270.35 621.126C270.045 620.086 269.872 619.499 269.685 618.911C258.909 585.935 266.668 563.266 295.344 543.933C298.254 541.971 301.187 540.041 304.12 538.112C310.591 533.854 317.059 529.599 323.279 525.007C345.88 508.329 360.09 486.327 363.431 457.844C364.805 446.148 363.781 434.657 359.848 423.275C358.176 424.287 356.587 425.295 355.042 426.275C351.744 428.366 348.647 430.33 345.382 431.934C303.466 452.507 259.152 455.053 214.03 448.245C184.802 443.834 156.584 436.019 136.218 411.348Z" fill="url(#paint0_linear_1805_24383)" {...{ "fill-rule": "evenodd", "clip-rule": "evenodd" }}></path>
<defs>
<linearGradient id="paint0_linear_1805_24383" x1="247.358" y1="0" x2="247.358" y2="622.479" gradientUnits="userSpaceOnUse">
<stop {...{ "stop-opacity": "0.9" }}></stop>
<stop offset="1" {...{ "stop-opacity": "0.2" }}></stop>
</linearGradient>
</defs>
</svg>
<h1>Welcome to <span class="text-gradient">Astro</span></h1>
<p class="instructions text-center">Un skuere triste</p>
<ul role="list" class="link-card-grid">
<Card href="https://docs.astro.build/" title="Documentation" body="Learn how Astro works and explore the official API docs." />
<Card href="https://astro.build/integrations/" title="Integrations" body="Supercharge your project with new frameworks and libraries." />
<Card href="https://astro.build/themes/" title="Themes" body="Explore a galaxy of community-built starter themes." />
<Card href="https://astro.build/chat/" title="Community" body="Come say hi to our amazing Discord community. ❤️" />
</ul>
</main>
</Layout>

<style>{`
  main {
    margin: auto;
    margin-top: 2rem;
    padding: 1rem;
    width: 800px;
    max-width: calc(100% - 2rem);
    color: white;
    font-size: 20px;
    line-height: 1.6;
  }
  .astro-a {
    position: absolute;
    top: -32px;
    left: 50%;
    transform: translatex(-50%);
    width: 220px;
    height: auto;
    z-index: -1;
  }
  h1 {
    font-size: 4rem;
    font-weight: 700;
    line-height: 1;
    text-align: center;
    margin-bottom: 1em;
  }
  .text-gradient {
    background-image: var(--accent-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 400%;
    background-position: 0%;
  }
  .instructions {
    margin-bottom: 2rem;
    border: 1px solid rgba(var(--accent-light), 25%);
    background: linear-gradient(
      rgba(var(--accent-dark), 66%),
      rgba(var(--accent-dark), 33%)
    );
    padding: 1.5rem;
    border-radius: 8px;
  }
  .instructions code {
    font-size: 0.8em;
    font-weight: bold;
    background: rgba(var(--accent-light), 12%);
    color: rgb(var(--accent-light));
    border-radius: 4px;
    padding: 0.3em 0.4em;
  }
  .instructions strong {
    color: rgb(var(--accent-light));
  }
  .link-card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(24ch, 1fr));
    gap: 2rem;
    padding: 0;
  }
`}</style>

</Fragment>;
