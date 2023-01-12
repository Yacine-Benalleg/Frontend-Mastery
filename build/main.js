/* normal heading mouse out */
{
  const nrmlHeadings = document.querySelectorAll(".normal-heading");
  nrmlHeadings.forEach((heading) => {
    heading.addEventListener("mouseout", (eo) => {
      eo.target.classList.add("normal-effect");
      console.log(eo.target);
    });
  });
}

/* boxes */

{
  const boxesObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("box-effect");
          boxesObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.3,
    }
  );

  // const boxcontainers = [
  //   document.getElementById("devCourses"),
  //   document.getElementById("designCourses"),
  // ];
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((boxcontainer) => {
    boxesObserver.observe(boxcontainer);
  });
}

/*opacity */

const textesObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("text-effect", entry.isIntersecting);
        textesObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.3,
  }
);

const texts = document.querySelectorAll(".text-container");
texts.forEach((text) => {
  textesObserver.observe(text);
});
