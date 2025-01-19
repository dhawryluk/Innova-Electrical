import React, { useEffect } from "react";

const Instagram = () => {
  const posts = [
    "https://www.instagram.com/p/CLW-ykaLwql/?utm_source=ig_web_copy_link",
    // "https://www.instagram.com/p/CKWm1wsL9Iv/?utm_source=ig_web_copy_link",
    "https://www.instagram.com/p/CKElQ2RLWAz/?utm_source=ig_web_copy_link",
    "https://www.instagram.com/p/CJ822xTLSKU/?utm_source=ig_web_copy_link",
  ];

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <h1 className="text-center text-white text-lg mt-6">
        Check out our latest projects on Instagram!
      </h1>

      <div className="w-full mx-auto flex flex-wrap justify-center gap-4 p-4">
        {posts.map((post, index) => (
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
                  className="block text-center text-white font-semibold"
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
