import { ProductCards, SearchBar } from "@/src/components";
import { productsList } from "@/src/utils";
import { ProductsPageProps } from "@/src/utils/types";
import { use } from "react";

export default function ProductsListPage({ searchParams }: ProductsPageProps) {
  const params = use(searchParams);

  const searchParam = params?.search;
  const search = Array.isArray(searchParam)
    ? searchParam[0]
    : (searchParam ?? "");

  const filteredAccounts = productsList.savings_accounts.filter((account) =>
    account.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="min-h-screen px-6 py-12">
      <div className="mx-auto mb-12 max-w-5xl text-center">
        <h1 className="text-greyscale500 mb-4 text-4xl font-bold">
          Nuestras Cuentas de Ahorro
        </h1>

        <div className="mt-6">
          <SearchBar />
        </div>
      </div>

      <section className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredAccounts.length > 0 ? (
          filteredAccounts.map((account) => (
            <ProductCards key={account.id} {...account} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No se encontraron resultados.
          </p>
        )}
      </section>
    </section>
  );
}
