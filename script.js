<script>
      // Example posts content
      const posts = {
        about: `<h2>About Me</h2>
                <p>Hello! I'm a passionate blogger and sports enthusiast. I share insights on finance, life lessons, and the things I'm most passionate about. Thanks for stopping by!</p>`,
        post1: `<h2>Post 1: I've never done this with money before</h2>
                <p>This is the full content of the first post. Learn about how I approached finances in a unique way this January.</p>`,
        post2: `<h2>Post 2: Why sports are life</h2>
                <p>Here, I explain why sports are such an integral part of our lives, not just as entertainment but as a life philosophy.</p>`,
        post3: `<h2>Post 3: My boldest ideas yet</h2>
                <p>Discover my most ambitious and creative ideas that could reshape the way we think about life and success.</p>`,
      };

      // Function to load post content
      function loadPost(postId) {
        const postContentDiv = document.getElementById("post-content");
        postContentDiv.innerHTML = posts[postId] || `<p>Post not found.</p>`;
      }

      // Start button functionality
      const startButton = document.getElementById("start-btn");
      const popup = document.getElementById("popup");

      startButton.addEventListener("click", () => {
        const isVisible = popup.style.display === "block";
        popup.style.display = isVisible ? "none" : "block";
      });

      // Clock functionality
      function updateClock() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, "0");
        const minutes = String(now.getMinutes()).padStart(2, "0");
        document.getElementById(
          "clock"
        ).textContent = `${hours}:${minutes} EST`;
      }

      setInterval(updateClock, 1000); // Update clock every second
      updateClock(); // Initialize clock immediately
    </script>