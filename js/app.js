const app = document.getElementById("app");

app.innerHTML = `
<header class="hero">
  <div class="hero-box">
    <h1>FirstHiring</h1>
    <p>Fast, reliable hiring for growing companies</p>

    <div class="cta-row">
      <a href="employers.html" class="cta primary">
        <span class="icon">👔</span>
        Hire Talent
      </a>

      <a href="candidates.html" class="cta secondary">
        <span class="icon">📄</span>
        Submit Resume
      </a>
    </div>
  </div>
</header>

<section class="block">
  <h2>What We Do</h2>
  <div class="cards">
    <div class="card">Permanent hiring across IT & Non-IT roles</div>
    <div class="card">Screened profiles delivered within 48 hours</div>
    <div class="card">Replacement guarantee on all hires</div>
  </div>
</section>

<section class="block alt">
  <h2>Why FirstHiring</h2>
  <ul class="points">
    <li>Pay only on successful joining</li>
    <li>No upfront fees</li>
    <li>Direct recruiter coordination</li>
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

/* JOBS */
fetch("data/jobs.json")
  .then(r => r.json())
  .then(jobs => {
    const jobsDiv = document.getElementById("jobs");
    jobs.forEach(job => {
      jobsDiv.innerHTML += `
        <div class="job">
          <h3>${job.title}</h3>
          <p>${job.location}</p>
          <span>${job.experience}</sp
