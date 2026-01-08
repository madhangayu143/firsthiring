document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");
  if (!app) return;

  app.innerHTML = `
    <header class="hero">
      <div class="hero-box">
        <h1>FirstHiring</h1>
        <p>Fast, reliable hiring for growing companies</p>

        <div class="cta-row">
          <a href="employers.html" class="cta primary">Hire Talent</a>
          <a href="candidates.html" class="cta secondary">Submit Resume</a>
        </div>
      </div>
    </header>

    <section class="block">
      <h2>What We Do</h2>
      <div class="cards">
        <div class="card">Permanent hiring across IT & Non-IT roles</div>
        <div class="card">Screened profiles within 48 hours</div>
        <div class="card">Replacement guarantee</div>
      </div>
    </section>

    <section class="block">
      <h2>Current Openings</h2>
      <div id="jobs"></div>
    </section>

    <footer>
      <p>© FirstHiring</p>
      <a href="privacy.html">Privacy Policy</a>
    </footer>
  `;

  fetch("./data/jobs.json")
    .then(r => r.json())
    .then(jobs => {
      const jobsDiv = document.getElementById("jobs");
      jobs.forEach(job => {
        jobsDiv.innerHTML += `
          <div class="job">
            <h3>${job.title}</h3>
            <p>${job.location}</p>
            <span>${job.experience}</span>
          </div>
        `;
      });
    })
    .catch(() => {
      document.getElementById("jobs").innerHTML =
        "<p>Jobs will be updated shortly.</p>";
    });
});
