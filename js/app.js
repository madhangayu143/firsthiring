document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");
  if (!app) return;

  app.innerHTML = `
    <header class="hero">
      <div class="hero-box">
        <h1>FirstHiring</h1>
        <p>Recruitment consultancy for permanent IT & Non-IT hiring</p>

        <div class="cta-row">
          <a href="employers.html" class="cta employer">
            <span class="icon">🏢</span>
            For Employers
          </a>

          <a href="candidates.html" class="cta seeker">
            <span class="icon">🎓</span>
            For Job Seekers
          </a>
        </div>

        <p class="helper">
          Employers post requirements. Job seekers apply for openings.
        </p>
      </div>
    </header>

    <section class="block">
      <h2>What We Do</h2>
      <div class="cards">
        <div class="card">Permanent hiring across IT and Non-IT roles</div>
        <div class="card">Screened candidate profiles within 48 hours</div>
        <div class="card">Replacement guarantee on all positions</div>
      </div>
    </section>

    <section class="block alt">
      <h2>Why FirstHiring</h2>
      <ul class="points">
        <li>Pay only on successful joining</li>
        <li>No upfront charges</li>
        <li>Direct coordination with hiring managers</li>
      </ul>
    </section>

    <section class="block">
      <h2>Current Openings</h2>
      <div id="jobs" class="jobs"></div>
    </section>

    <footer>
      <p>© FirstHiring</p>
      <a href="privacy.html">Privacy Policy</a>
    </footer>
  `;

  fetch("./data/jobs.json")
    .then(res => res.json())
    .then(jobs => {
      const jobsDiv = document.getElementById("jobs");

      if (!jobs || jobs.length === 0) {
        jobsDiv.innerHTML = "<p>Openings will be updated shortly.</p>";
        return;
      }

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
        "<p>Openings will be updated shortly.</p>";
    });
});
