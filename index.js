function imageconfig(options) {
  const images = document.querySelectorAll(".images");

  switch (options.size) {
    case "big":
      options.imageSize = "90%";
      break;
    case "medium":
      options.imageSize = "70%";
      break;
    case "small":
      options.imageSize = "50%";
      break;
    default:
      options.imageSize = "40%";
      break;
  }

  images.forEach((image) => {
    image.style.width = options.imageSize;
    image.style.display = "block";

    if (options.margin) {
      image.style.margin = "20px auto";
    }

    if (options.padding) {
      image.style.padding = "10px";
      image.style.border = "1px solid #000";
    }
  });
}

module.exports.imageconfig = imageconfig;
