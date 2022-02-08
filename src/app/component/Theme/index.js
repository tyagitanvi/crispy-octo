// import React from 'react';


// function Theme() {
//   return (
//     <div>
//       Theme
//     </div>
//   );
// }

// export default Theme;

import React, { useState, useEffect } from 'react';
import { ThemeContext, themes } from './base.js';
import './style.css'
export default function Theme(props) {
  const [theme, setTheme] = useState(themes.dark);

  function changeTheme(theme) {
    setTheme(theme);
  }

  useEffect(() => {
    switch (theme) {
      case themes.light:
        document.body.classList.add('white-content');
        break;
      case themes.dark:
      default:
        document.body.classList.remove('white-content');
        break;
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}