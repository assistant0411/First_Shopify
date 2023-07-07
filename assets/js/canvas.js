window.onload = () => {
  // Get the canvas element and context
  const canvas = document.getElementById("myCanvas");
  canvas.width = window.innerWidth * 0.75;
  canvas.height = window.innerHeight * 0.4;
  const ctx = canvas.getContext("2d");

  const font = "64px impact";
  const width = canvas.width;
  const height = canvas.height;

  const angleSteps = 180 / width;

  const os = document.createElement("canvas");
  const octx = os.getContext("2d");
  os.width = width;
  os.height = height;
  octx.font = font;
  octx.textBaseline = "top";
  octx.textAlign = "center";

  function renderNormalText(text) {
    // offsetY = 100;
    let textHeight = 64;
    let top = height * 0.5 - textHeight / 2;

    octx.clearRect(0, 0, width, height);
    ctx.clearRect(0, 0, width, height);

    octx.fillText(text, width * 0.5, 0);

    /// slide and dice
    let i = width;

    let y = 0;
    while (i--) {
      ctx.drawImage(os, i, 0, 1, textHeight, i, top, 1, textHeight);
    }
  }
  // ================
  function renderCurveText(text) {
    let curve = 100;
    // offsetY = 100;
    let textHeight = 64;
    let top = height * 0.5 - (textHeight * 3 - curve * 2) / 2;

    octx.clearRect(0, 0, width, height);
    ctx.clearRect(0, 0, width, height);

    octx.fillText(text, width * 0.5, 0);

    /// slide and dice
    let i = width;

    let y = 0;
    while (i--) {
      y = curve * Math.sin((i * angleSteps * Math.PI) / 180);

      ctx.drawImage(os, i, 0, 1, textHeight, i, top - y, 1, textHeight * 3 - y);
    }
  }

  function renderArchText(text) {
    let curve = 100;
    // offsetY = 100;
    let textHeight = 64;
    let top = height * 0.5 - (textHeight * 3 - curve * 2) / 2;

    octx.clearRect(0, 0, width, height);
    ctx.clearRect(0, 0, width, height);

    octx.fillText(text, width * 0.5, 0);

    /// slide and dice
    let i = width;

    let y = 0;
    while (i--) {
      y = curve * Math.sin((i * angleSteps * Math.PI) / 180);

      ctx.drawImage(os, i, 0, 1, textHeight, i, top - y, 1, textHeight * 3 - y);
    }
  }

  function renderBridgeText(text) {
    let curve = 100;
    // offsetY = 100;
    let textHeight = 64;
    let top = height * 0.5 - textHeight;

    octx.clearRect(0, 0, width, height);
    ctx.clearRect(0, 0, width, height);

    octx.fillText(text, width * 0.5, 0);

    /// slide and dice
    let i = width;

    let y = 0;
    while (i--) {
      y = curve * Math.sin((i * angleSteps * Math.PI) / 180);

      ctx.drawImage(os, i, 0, 1, textHeight, i, top, 1, textHeight * 3 - y);
    }
  }

  function renderValleyText(text) {
    let curve = 100;
    // offsetY = 100;
    let textHeight = 64;
    let top = height * 0.5 - textHeight * 2;

    octx.clearRect(0, 0, width, height);
    ctx.clearRect(0, 0, width, height);

    octx.fillText(text, width * 0.5, 0);

    /// slide and dice
    let i = width;

    let y = 0;
    while (i--) {
      y = curve * Math.sin((i * angleSteps * Math.PI) / 180);

      ctx.drawImage(os, i, 0, 1, textHeight, i, top + y, 1, textHeight * 3 - y);
    }
  }

  function renderPinchText(text) {
    let curve = 100;
    // offsetY = 100;
    let textHeight = 64;
    let top = height * 0.5 - textHeight * 2;

    octx.clearRect(0, 0, width, height);
    ctx.clearRect(0, 0, width, height);

    octx.fillText(text, width * 0.5, 0);

    /// slide and dice
    let i = width;

    let y = 0;
    while (i--) {
      y = curve * Math.sin((i * angleSteps * Math.PI) / 180);

      ctx.drawImage(
        os,
        i,
        0,
        1,
        textHeight,
        i,
        top + y,
        1,
        textHeight * 4 - 2 * y
      );
    }
  }

  function renderBulgeText(text) {
    let curve = 100;
    // offsetY = 100;
    let textHeight = 64;
    let top = height * 0.5 - curve / 2 + textHeight;

    octx.clearRect(0, 0, width, height);
    ctx.clearRect(0, 0, width, height);

    octx.fillText(text, width * 0.5, 0);

    /// slide and dice
    let i = width;

    let y = 0;
    while (i--) {
      y = curve * Math.sin((i * angleSteps * Math.PI) / 180);

      ctx.drawImage(
        os,
        i,
        0,
        1,
        textHeight,
        i,
        top - y,
        1,
        2 * y - textHeight * 2
      );
    }
  }

  function renderPerspectiveText(text) {
    let curve = 100;
    // offsetY = 100;
    let textHeight = 64;
    let top = height * 0;

    octx.clearRect(0, 0, width, height);
    ctx.clearRect(0, 0, width, height);

    octx.fillText(text, width * 0.5, 0);

    /// slide and dice
    let i = width;

    let y = 0;
    while (i--) {
      y = i > width / 2 ? 0.2 * i : 0.2 * (width - i);

      ctx.drawImage(
        os,
        i,
        0,
        1,
        textHeight,
        i,
        top + y,
        1,
        textHeight * 5 - y * 2
      );
    }
  }

  function renderPointedText(text) {
    let curve = 100;
    // offsetY = 100;
    let textHeight = 64;
    let top = height * 0;

    octx.clearRect(0, 0, width, height);
    ctx.clearRect(0, 0, width, height);

    octx.fillText(text, width * 0.5, 0);

    /// slide and dice
    let i = width;

    let y = 0;
    while (i--) {
      y = i > width / 2 ? 0.2 * i : 0.2 * (width - i);
      console.log(textHeight * 2 - y * 2);

      ctx.drawImage(os, i, 0, 1, textHeight, i, top + y, 1, textHeight * 3 - y);
    }
  }

  function renderDownwardText(text) {
    let curve = 100;
    // offsetY = 100;
    let textHeight = 64;
    let top = height * 0.5 - (textHeight + width * 0.2) / 2;

    octx.clearRect(0, 0, width, height);
    ctx.clearRect(0, 0, width, height);

    octx.fillText(text, width * 0.5, 0);

    /// slide and dice
    let i = width;

    let y = 0;
    let yy = 0;
    while (i--) {
      y = 0.2 * i;

      ctx.drawImage(os, i, 0, 1, textHeight, i, top, 1, textHeight + y);
    }
  }

  function renderUpwardText(text) {
    let curve = 100;
    // offsetY = 100;
    let textHeight = 64;
    let top = height * 0.5 - (textHeight + width * 0.2) / 2;

    octx.clearRect(0, 0, width, height);
    ctx.clearRect(0, 0, width, height);

    octx.fillText(text, width * 0.5, 0);

    /// slide and dice
    let i = width;

    let y = 0;
    let yy = 0;
    while (i--) {
      y = 0.2 * i;

      ctx.drawImage(
        os,
        i,
        0,
        1,
        textHeight,
        i,
        top + (width * 0.2 - y),
        1,
        textHeight + y
      );
    }
  }

  function renderConeText(text) {
    let curve = 100;
    // offsetY = 100;
    let textHeight = 64;
    let top = height * 0.5 - (textHeight / 4 + width * 0.4) / 2;

    octx.clearRect(0, 0, width, height);
    ctx.clearRect(0, 0, width, height);

    octx.fillText(text, width * 0.5, 0);

    /// slide and dice
    let i = width;

    let y = 0;
    let yy = 0;
    while (i--) {
      y = 0.2 * i;

      ctx.drawImage(
        os,
        i,
        0,
        1,
        textHeight,
        i,
        top + (width * 0.2 - y),
        1,
        y * 2
      );
    }
  }

  // Handle button click event
  document.getElementById("draw").addEventListener("click", function () {
    // Get the user's name and selected color
    const text = document.getElementById("textInput").value;
    const effect = document.getElementById("selectInput").value;

    switch (effect) {
      case "normal":
        renderNormalText(text);
        break;

      case "curve":
        renderCurveText(text);
        break;

      case "arch":
        renderArchText(text);
        break;

      case "bridge":
        renderBridgeText(text);
        break;

      case "valley":
        renderValleyText(text);
        break;

      case "pinch":
        renderPinchText(text);
        break;

      case "bulge":
        renderBulgeText(text);
        break;

      case "perspective":
        renderPerspectiveText(text);
        break;

      case "pointed":
        renderPointedText(text);
        break;

      case "downward":
        renderDownwardText(text);
        break;

      case "upward":
        renderUpwardText(text);
        break;

      case "cone":
        renderConeText(text);
        break;

      default:
        break;
    }

    // renderPointedText(text);
  });
};
