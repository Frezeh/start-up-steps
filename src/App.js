import React, { createContext, useState, useCallback } from "react";
import Discover from "./components/Discover";
import Delivery from "./components/Delivery";
import Foundation from "./components/Foundation";
import { useLocalStorage } from "./CustomHook";

export const AppContext = createContext(null);

export default function App() {
  const [office, setOffice] = useLocalStorage("Setup virtual office", false);
  const [mission, setMission] = useLocalStorage("Set mission and vision", false);
  const [name, setName] = useLocalStorage("Select business name", false);
  const [domains, setDomains] = useLocalStorage("Buy domains", false);
  const [foundation, setFoundation] = useLocalStorage("Complete foundation", false);
  const [roadMap, setRoadMap] = useLocalStorage("Create roadmap", false);
  const [analysis, setAnalysis] = useLocalStorage("Competitor analysis", false);
  const [discovery, setDiscovery] = useLocalStorage("Complete discovery", false);
  const [marketing, setMarketing] = useLocalStorage("Release markerting website", false);
  const [mvp, setMvp] = useLocalStorage("Release MVP", false);
  const [delivery, setDelivery] = useLocalStorage("Complete delivery", false);

  return (
    <AppContext.Provider
      value={{
        office,
        setOffice,
        mission,
        setMission,
        name,
        setName,
        domains,
        setDomains,
        foundation,
        setFoundation,
        roadMap,
        setRoadMap,
        analysis,
        setAnalysis,
        discovery,
        setDiscovery,
        marketing,
        setMarketing,
        mvp,
        setMvp,
        delivery,
        setDelivery,
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", backgroundColor: "#fff", fontFamily: "cursive" }}>
        <h1
          style={{
            fontWeight: "bold",
            fontSize: 20,
            margin: 20,
          }}
        >
          My startup progress
        </h1>
        <Foundation />
        <Discover />
        <Delivery />
      </div>
    </AppContext.Provider>
  );
}
