export function creativeCardHover() {
  const ASSETS_PATH = "./assets/icons/";
  const creativeElements = document.getElementsByClassName(
    "creatives-side__creative-info"
  );

  const svgLogos = [
    "facebook-icon.svg",
    "google-plus-icon.svg",
    "twitter-icon.svg",
  ];

  function embeddedSVG(svgPath, svgContainer) {
    fetch(svgPath)
      .then((response) => response.text())
      .then((svgContent) => {
        const parser = new DOMParser();
        const svgDocument = parser.parseFromString(svgContent, "image/svg+xml");
        const svgElement = svgDocument.documentElement;

        if (svgElement.tagName.toLowerCase() === "svg") {
          svgContainer.appendChild(svgElement);
        } else {
          console.error("Parsed content is not an SVG.");
        }
      })
      .catch((error) => console.error("Load Error SVG:", error));
  }

  const hoverCardTemplate = document.createElement("section");
  hoverCardTemplate.setAttribute("class", "creatives-side__hover-card");

  const creativeSocialMedia = document.createElement("section");
  creativeSocialMedia.setAttribute(
    "class",
    "creatives-side__creative-social-media"
  );

  svgLogos.forEach((icon) => {
    const link = document.createElement("a");
    link.setAttribute("href", "");

    const iconContainer = document.createElement("div");
    iconContainer.setAttribute("class", "creatives-side__social-icon");

    link.appendChild(iconContainer);
    creativeSocialMedia.appendChild(link);
  });

  hoverCardTemplate.appendChild(creativeSocialMedia);

  [...creativeElements].forEach((element) => {
    const hoverCardClone = hoverCardTemplate.cloneNode(true);
    const socialIcons = hoverCardClone.querySelectorAll(
      ".creatives-side__social-icon"
    );

    svgLogos.forEach((icon, index) => {
      embeddedSVG(`${ASSETS_PATH}${icon}`, socialIcons[index]);
    });

    element.appendChild(hoverCardClone);
  });
}
