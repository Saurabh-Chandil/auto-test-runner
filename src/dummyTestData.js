const makeDummyTest = () => {
    const delay = 7000 + Math.random() * 7000;
    const testPassed = Math.random() > 0.5;
  
    return (callback) => {
      window.setTimeout(() => callback(testPassed), delay);
    };
  };
  
  export const dummyTests = [
    { description: "Uploads go in both directions", run: makeDummyTest },
    { description: "PDFs are adequately waterproof", run: makeDummyTest },
    { description: "Videos are heated to 12,000,000 Kelvin", run: makeDummyTest },
    { description: "Subpixels can go rock climbing", run: makeDummyTest },
    { description: "Images are squarer than traffic cones", run: makeDummyTest },
    { description: "Metaproperties don't go too meta", run: makeDummyTest }
  ];
  