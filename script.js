//your JS code here. If required.

    class Selector {
      applyStyling() {
        const paragraphs = document.querySelectorAll('p');
        const selectedParagraphs = [paragraphs[0], paragraphs[2]];

        selectedParagraphs.forEach(paragraph => {
          paragraph.classList.add('selector');
        });
      }
    }

    const selector = new Selector();
    selector.applyStyling();
