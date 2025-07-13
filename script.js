//Index- Logo

window.addEventListener("scroll", () => {
  const scrollThreshold = 100;
  const body = document.body;
  if (window.scrollY > scrollThreshold) {
    body.classList.add("scrolled");
  } else {
    body.classList.remove("scrolled");
  }
});

//  Index- TypeWriter

document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".typewriter-text");
  const speed = 50;
  let currentIndex = 0;

  function typeWriter(element, text, index, callback) {
    if (index < text.length) {
      element.textContent += text.charAt(index);
      setTimeout(() => typeWriter(element, text, index + 1, callback), speed);
    } else {
      callback();
    }
  }

  function startTypingSequence() {
    if (currentIndex >= elements.length) return;

    const el = elements[currentIndex];
    const text = el.textContent;
    el.textContent = "";
    el.style.visibility = "visible";

    typeWriter(el, text, 0, () => {
      currentIndex++;
      startTypingSequence();
    });
  }

  startTypingSequence();
});


//References

document.querySelectorAll('#carousel div').forEach(div => {
  div.addEventListener('click', () => {
    moveToSelected(div);
  });
});

document.addEventListener('keydown', function (e) {
  switch (e.key) {
    case 'ArrowLeft':
      moveToSelected('prev');
      break;
    case 'ArrowRight':
      moveToSelected('next');
      break;
  }
});

function moveToSelected(element) {
  const selected = (element === 'next')
    ? document.querySelector('.selected').nextElementSibling
    : (element === 'prev')
      ? document.querySelector('.selected').previousElementSibling
      : element;

  if (!selected) return;

  const next = selected.nextElementSibling;
  const prev = selected.previousElementSibling;
  const nextSecond = next?.nextElementSibling;
  const prevSecond = prev?.previousElementSibling;

  function setClass(el, className) {
    if (el) el.className = className;
  }

  setClass(selected, 'selected');
  setClass(prev, 'prev');
  setClass(next, 'next');
  setClass(prevSecond, 'prevLeftSecond');
  setClass(nextSecond, 'nextRightSecond');

  let el = nextSecond?.nextElementSibling;
  while (el) {
    setClass(el, 'hideRight');
    el = el.nextElementSibling;
  }

  el = prevSecond?.previousElementSibling;
  while (el) {
    setClass(el, 'hideLeft');
    el = el.previousElementSibling;
  }
}

//Services
document.addEventListener('DOMContentLoaded', () => {
  const services = document.querySelectorAll('.service');
  services.forEach((service, index) => {
    setTimeout(() => {
      service.classList.add('active');
    }, index * 200);
  });

  // Services- hover animation
  services.forEach(service => {
    service.addEventListener('mouseenter', () => {
      service.style.transform = 'scale(1.05)';
    });
    service.addEventListener('mouseleave', () => {
      service.style.transform = 'scale(1)';
    });
  });
});