import React from 'react';
import ArticleContent from "./ArticlesContent";

const Articles = ({match}) => {
     const name = match.params.name;
     const article = ArticleContent.find((article)=> article.name === name);
     if(!article) return <h1>Article does not exist</h1>
     return (
          <div>
               <h1 className="sm:text-4xl text-2xl font-bold mt-6 text-gray-600">
              {article.title}</h1>
              {article.content.map((paragraph,index)=> (
                   <p className="mx-auto leading-relaxed text-base mb-4 mt-4" key={index}>{paragraph}</p>
              ))}
          </div>
     );
};

export default Articles;