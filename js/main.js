fetch('data/jobs.json')
  .then(response => response.json())
  .then(jobs => {
    const container = document.getElementById('jobs');
    jobs.forEach(job => {
      const div = document.createElement('div');
      div.className = 'job-card';
      div.innerHTML = `
        <h3>${job.title}</h3>
        <p>Location: ${job.location}</p>
        <p>Experience: ${job.experience}</p>
      `;
      container.appendChild(div);
    });
  });
