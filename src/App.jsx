import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./css_files/App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import IndividualArticle from "./components/IndividualArticle";
import UserContext from "./contexts/userContext";
import ArticlesList from "./components/ArticlesList";
import TopicArticles from "./components/TopicArticles";

function App() {
  const [user, setUser] = useState("grumpy19");
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <section>
        <Header />
      </section>
      <section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<ArticlesList />} />
          <Route path="/articles/:article_id" element={<IndividualArticle />} />
          <Route path="/topic/:topic_name" element={<TopicArticles />} />
        </Routes>
      </section>
    </UserContext.Provider>
  );
}

export default App;
