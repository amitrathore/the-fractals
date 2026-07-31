const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!prefersReducedMotion) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  document.querySelectorAll("[data-reveal]").forEach((element) => observer.observe(element));
}

const tallyFrame = document.querySelector("#tally-application");

if (tallyFrame) {
  const currentParams = new URLSearchParams(window.location.search);
  const embedUrl = new URL(tallyFrame.dataset.tallySrc);

  ["program", "originPage", "ref"].forEach((key) => {
    const value = currentParams.get(key);

    if (value) {
      embedUrl.searchParams.set(key, value);
    }
  });

  tallyFrame.dataset.tallySrc = embedUrl.toString();
  tallyFrame.src = embedUrl.toString();
}
