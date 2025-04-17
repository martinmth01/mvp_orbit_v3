
import { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BlogCard from "@/components/BlogCard";

// Mock data for the blog
const mockPosts = [
  {
    id: "1",
    title: "How to Create a Diversified Investment Portfolio",
    excerpt: "Learn the fundamentals of portfolio diversification and why it matters for long-term financial success.",
    date: "Apr 12, 2023",
    readTime: "5 min read",
    category: "Investing",
    tags: ["Portfolio", "Diversification", "Stocks"],
    coverImage: "https://images.unsplash.com/photo-1579532536935-619928decd08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    author: {
      name: "Sarah Johnson",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
  },
  {
    id: "2",
    title: "Retirement Planning in Your 30s: What You Need to Know",
    excerpt: "Starting early is key to a comfortable retirement. Here's what you should be doing in your 30s to prepare.",
    date: "Mar 28, 2023",
    readTime: "7 min read",
    category: "Retirement",
    tags: ["Planning", "Savings", "401k"],
    coverImage: "https://images.unsplash.com/photo-1469571486292-b53376e58b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    author: {
      name: "Michael Chen",
      avatar: "https://randomuser.me/api/portraits/men/36.jpg",
    },
  },
  {
    id: "3",
    title: "Tax Strategies That Could Save You Thousands",
    excerpt: "Explore these legal tax optimization strategies that can help you keep more of your hard-earned money.",
    date: "Feb 15, 2023",
    readTime: "6 min read",
    category: "Taxes",
    tags: ["Tax Planning", "Deductions", "Savings"],
    coverImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2011&q=80",
    author: {
      name: "Robert Garcia",
      avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    },
  },
  {
    id: "4",
    title: "Understanding Market Volatility: A Guide for Investors",
    excerpt: "Market ups and downs are normal. Learn how to stay calm and make informed decisions during volatile periods.",
    date: "Jan 20, 2023",
    readTime: "8 min read",
    category: "Investing",
    tags: ["Markets", "Volatility", "Risk Management"],
    coverImage: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    author: {
      name: "Amanda Peterson",
      avatar: "https://randomuser.me/api/portraits/women/28.jpg",
    },
  },
  {
    id: "5",
    title: "The Impact of Inflation on Your Savings",
    excerpt: "Inflation can silently erode your purchasing power. Discover strategies to protect your savings in inflationary environments.",
    date: "Dec 12, 2022",
    readTime: "5 min read",
    category: "Economy",
    tags: ["Inflation", "Savings", "Purchasing Power"],
    coverImage: "https://images.unsplash.com/photo-1621981386432-baba3e0b7d7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    author: {
      name: "Thomas Wright",
      avatar: "https://randomuser.me/api/portraits/men/42.jpg",
    },
  },
  {
    id: "6",
    title: "Building Wealth Through Real Estate: A Beginner's Guide",
    excerpt: "Real estate remains one of the most reliable ways to build long-term wealth. Here's how to get started.",
    date: "Nov 5, 2022",
    readTime: "9 min read",
    category: "Real Estate",
    tags: ["Property", "Investment", "Passive Income"],
    coverImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
    author: {
      name: "Olivia Martinez",
      avatar: "https://randomuser.me/api/portraits/women/63.jpg",
    },
  },
];

const categories = ["All", "Investing", "Retirement", "Taxes", "Economy", "Real Estate"];
const popularTags = ["Investing", "Savings", "Retirement", "Tax Planning", "Markets", "Property", "Portfolio"];

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeTags, setActiveTags] = useState<string[]>([]);

  const handleTagToggle = (tag: string) => {
    setActiveTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag) 
        : [...prev, tag]
    );
  };

  // Filter posts based on search, category, and tags
  const filteredPosts = mockPosts.filter(post => {
    const matchesSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    
    const matchesTags = activeTags.length === 0 || 
      activeTags.some(tag => post.tags.includes(tag));
    
    return matchesSearch && matchesCategory && matchesTags;
  });

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Financial Insights & Education</h1>
          <p className="text-xl text-muted-foreground">
            Explore the latest articles on personal finance, investing, and wealth management.
          </p>
        </div>

        <div className="mb-12">
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search articles..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <Tabs defaultValue="All" className="mb-8">
            <TabsList className="flex flex-wrap h-auto bg-transparent space-x-2 mb-4">
              {categories.map(category => (
                <TabsTrigger 
                  key={category} 
                  value={category}
                  onClick={() => setActiveCategory(category)}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          <div className="flex flex-wrap gap-2 mb-8">
            <span className="text-sm font-medium py-1">Popular Tags:</span>
            {popularTags.map(tag => (
              <Badge 
                key={tag} 
                variant={activeTags.includes(tag) ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => handleTagToggle(tag)}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {filteredPosts.length > 0 ? (
          <div className="blog-card-grid">
            {filteredPosts.map(post => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium mb-2">No articles found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filters</p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('All');
                setActiveTags([]);
              }}
            >
              Reset all filters
            </Button>
          </div>
        )}

        {filteredPosts.length > 0 && (
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load more articles
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
