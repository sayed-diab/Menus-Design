import { useEffect } from 'react';

const Buttonizer = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = `
      (function (n, t, c, d) { 
        if (t.getElementById(d)) { return; }; 
        var o = t.createElement("script"); 
        o.id = d; 
        o.async = !0, 
        o.src = "https://cdn.buttonizer.io/embed.js", 
        o.onload = function () { window.Buttonizer.init("847f4a87-dc93-4495-b641-df339d9651c3") }, 
        t.head.appendChild(o) 
      })(window, document, "847f4a87-dc93-4495-b641-df339d9651c3", "buttonizer_script");
    `;
    document.head.appendChild(script);

    return () => {
      // Cleanup if needed
      document.head.removeChild(script);
    };
  }, []);

  return null;
};

export default Buttonizer;
