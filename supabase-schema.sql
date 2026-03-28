-- Run this in your Supabase project: Dashboard → SQL Editor → New Query

-- TEAS table
create table if not exists teas (
  id           uuid primary key default gen_random_uuid(),
  name         text not null,
  price        text not null,
  description  text not null,
  notes        text[] not null default '{}',
  image_seed   text not null default 'tea-generic',
  sort_order   int  not null default 0,
  created_at   timestamptz default now()
);

-- MENU ITEMS table
create table if not exists menu_items (
  id           uuid primary key default gen_random_uuid(),
  category     text not null check (category in ('Signatures','Starters','Mains','Desserts','Cocktails')),
  name         text not null,
  price        text not null,
  description  text not null,
  tag          text,           -- optional badge e.g. 'Bestseller', 'Chef''s Pick'
  sort_order   int  not null default 0,
  created_at   timestamptz default now()
);

-- Enable public read access (anonymous users can view the menu)
alter table teas       enable row level security;
alter table menu_items enable row level security;

create policy "Public read teas"
  on teas for select using (true);

create policy "Public read menu_items"
  on menu_items for select using (true);

-- EXAMPLE: Insert a tea manually (then remove the fallback kicks in automatically)
-- insert into teas (name, price, description, notes, image_seed, sort_order)
-- values ('Classic Ceylon', '฿115', 'Slow-cooked milk skin crowns this brew.', '{"Full-bodied","Milk-forward","Warm spice"}', 'ceylon-tea-glass', 1);

-- EXAMPLE: Insert a menu item manually
-- insert into menu_items (category, name, price, description, tag, sort_order)
-- values ('Signatures', 'Burrata, Mutton & Tea Leaf', '฿650', 'Creamy burrata with fermented tea leaves...', 'Bestseller', 1);
