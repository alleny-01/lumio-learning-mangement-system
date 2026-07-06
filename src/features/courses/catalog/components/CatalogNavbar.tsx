import SearchBar from "@/components/ui/Search";

function CatalogNavbar() {
  return (
    <header className="fixed top-0 z-50 w-full bg-slate-50/80 dark:bg-slate-950/80 backdrop-blur-md">
      <nav className="flex justify-between items-center w-full px-3 py-3 max-w-full mx-auto">
        <SearchBar />
      </nav>
    </header>
  );
}

export default CatalogNavbar;