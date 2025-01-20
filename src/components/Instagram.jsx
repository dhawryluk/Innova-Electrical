import { useEffect, useState, useMemo } from "react";

const Instagram = () => {
  const posts = useMemo(
    () => [
      "https://www.instagram.com/p/CLW-ykaLwql/?utm_source=ig_web_copy_link",
      "https://www.instagram.com/p/CKElQ2RLWAz/?utm_source=ig_web_copy_link",
      "https://www.instagram.com/p/CJ822xTLSKU/?utm_source=ig_web_copy_link",
    ],
    []
  );

  const [visiblePosts, setVisiblePosts] = useState(posts);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    const updateVisiblePosts = () => {
      if (window.innerWidth >= 1024) {
        setVisiblePosts(posts.slice(0, 3)); // 3 images for large screens
      } else if (window.innerWidth >= 768) {
        setVisiblePosts(posts.slice(0, 2)); // 2 images for medium screens
      } else {
        setVisiblePosts(posts.slice(0, 1)); // 1 image for small screens
      }
    };

    window.addEventListener("resize", updateVisiblePosts);
    updateVisiblePosts(); // Initial check

    return () => window.removeEventListener("resize", updateVisiblePosts);
  }, [posts]);

  return (
    <>
      <h1 className="text-center text-light text-2xl mt-6">
        Check out our latest projects on Instagram!
      </h1>

      <div className="w-full mx-auto flex flex-wrap justify-center gap-6 p-4">
        {visiblePosts.map((post, index) => (
          <div key={index}>
            <blockquote
              className="instagram-media"
              data-instgrm-permalink={post}
              data-instgrm-version="14"
            >
              <div className="p-2">
                <a
                  href={post}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center text-light font-semibold"
                >
                  View this post on Instagram
                </a>
              </div>
            </blockquote>
          </div>
        ))}
      </div>
    </>
  );
};

export default Instagram;
