// Add or remove project IDs here to change the cards shown on the homepage.
const featuredProjectIds = ["eyedog", "wearable"];

const projectsMarkup = `
  <div class="projects">
    <div class="project-card" data-project-id="eyedog" data-tags="ar unity uiux">
      <div class="tag-list"><span class="tag">AR</span><span class="tag">Unity</span></div>
      <h3>Eyedog AR Wayfinding</h3>
      <p>Indoor navigation system for hospitals using AR and QR codes.</p>
      <a href="ar-wayfinding.html">View Project</a>
    </div>

    <div class="project-card" data-project-id="wearable" data-tags="dark-tech uiux">
      <div class="tag-list"><span class="tag">Dark Tech</span><span class="tag">UI/UX</span></div>
      <h3>Controlling Wearable</h3>
      <p>Fitbit/Pip-Boy style wearable exploring Dark Tech and unethical gamification.</p>
      <a href="dark-tech.html">View Project</a>
    </div>

    <div class="project-card is-coming-soon" data-project-id="doodle-island" data-tags="unity uiux">
      <div class="tag-list"><span class="tag">Unity</span><span class="tag">Game Dev</span></div>
      <h3>Doodle Island</h3>
      <p>Unity game development covering player movement, events, music, UI/UX and the Wheel of Teleportation.</p>
      <a href="doodle-island.html">View Project</a>
    </div>

    <div class="project-card is-coming-soon" data-project-id="punishing-home" data-tags="critical-design uiux">
      <div class="tag-list"><span class="tag">Critical Design</span><span class="tag">Smart Home</span></div>
      <h3>The Punishing Home</h3>
      <p>An ongoing experience exploring autonomy, dependence and control in the smart home of the future.</p>
      <a href="punishing-home.html">View Project</a>
    </div>

    <div class="project-card is-coming-soon" data-project-id="podcast" data-tags="uiux">
      <div class="tag-list"><span class="tag">Audio</span><span class="tag">Media</span></div>
      <h3>Podcast Engineering</h3>
      <p>Technician, editor and presenter for Filet Americano.</p>
      <span class="tag">Case study coming soon</span>
    </div>
  </div>`;

function renderProjects(container, featuredOnly = false) {
  container.innerHTML = projectsMarkup;

  if (featuredOnly) {
    container.querySelectorAll(".project-card").forEach(card => {
      if (!featuredProjectIds.includes(card.dataset.projectId)) {
        card.remove();
      }
    });
  }
}
