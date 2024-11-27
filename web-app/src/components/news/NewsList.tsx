'use client';
import { useState } from 'react';
import { NewsType } from '@/src/types';
import { NewsCard } from './NewsCard';

const NewsList = ({ news = [] }: { news: NewsType[] }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredNews = news?.filter(news =>
    news.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full">
      <input
        type="text"
        placeholder="Search courses..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4 w-full p-2 border border-gray-300 rounded"
      />
      <div>
        {filteredNews.length ? (
          filteredNews.map(news => (
            <NewsCard key={news.id} news={news} />
          ))
        ) : (
          <p>No courses found</p>
        )}
      </div>
    </div>
  );
};

export default NewsList;