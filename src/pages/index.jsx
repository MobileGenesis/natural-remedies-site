import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

const recipes = [
  {
    title: "Hair Growth Oil",
    category: "Hair",
    summary: "A powerful blend using aloe vera, castor oil, and coconut oil for hair regrowth.",
    pdf: "/Hair_Growth_Recipe.pdf"
  },
  {
    title: "Pineapple & Cucumber Flush",
    category: "Flushes",
    summary: "Hydrating juice that supports liver and kidney function using pineapple, cucumber, and lemon.",
    pdf: "/Pineapple_Cucumber_Detox_Recipe.pdf"
  },
  {
    title: "Eyesight Remedy",
    category: "Eyes",
    summary: "Carrot and garlic drink that boosts eye health and circulation.",
    pdf: "/Natural_Eyesight_Remedy_Recipe.pdf"
  },
  {
    title: "Herbal Hair Spray",
    category: "Hair",
    summary: "Stimulating herbal spray made with rosemary, cloves, and cinnamon to promote hair growth.",
    pdf: "/Cinnamon_Clove_Rosemary_Hair_Spray.pdf"
  }
];

export default function NaturalRemedyHub() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Hair', 'Flushes', 'Eyes', 'Inflammation', 'Skin', 'Pain'];

  const filteredRecipes = recipes.filter(r => {
    return (
      (filter === 'All' || r.category === filter) &&
      r.title.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">Natural Remedy Library</h1>

      <div className="flex flex-wrap justify-between items-center gap-2 mb-4">
        <Input
          placeholder="Search recipes..."
          className="flex-1"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <select
          className="border px-3 py-2 rounded-md"
          value={filter}
          onChange={e => setFilter(e.target.value)}
        >
          {categories.map(cat => <option key={cat}>{cat}</option>)}
        </select>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {filteredRecipes.map(recipe => (
          <Card key={recipe.title} className="rounded-xl shadow-md">
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
              <p className="text-sm text-muted-foreground mb-3">Category: {recipe.category}</p>
              <p className="mb-3">{recipe.summary}</p>
              <a
                href={recipe.pdf}
                target="_blank"
                className="text-blue-600 underline"
              >
                Download PDF
              </a>
            </CardContent>
          </Card>
        ))}
        {filteredRecipes.length === 0 && <p className="text-center col-span-2">No recipes found.</p>}
      </div>
    </div>
  );
}
