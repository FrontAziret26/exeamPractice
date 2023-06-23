import React from "react";
import { Route, Routes } from "react-router";
import { Characters } from "../pages/Characters";
import { Episode } from "../pages/Episode";
import { Location } from "../pages/Location";
import { CharacterDetail } from "../pages/CharacterDetail";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/characters" element={<Characters />} />
      <Route path="/characters/:id/detail" element={<CharacterDetail />} />
      <Route path="/location" element={<Location />} />
      <Route path="/episode" element={<Episode />} />
    </Routes>
  );
};
