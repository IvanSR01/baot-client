"use client"
import {CatalogCard} from "@/screens/catalog/components/catalog_card";
import Wrapper from "@/compenents/wrapper/Wrapper.tsx";
import {Pagination} from "@/compenents/pagination";
import {useCatalog} from "@/screens/catalog";

export const CatalogGrid = () => {
    const {mapActive} = useCatalog();
    return mapActive ? <></> : (
        <Wrapper className="!mb-[100px]">
            <div className="grid grid-cols-3 max-1060px:grid-cols-2 max-680px:!grid-cols-1 max-680px:gap-y-[2rem] max-1060px:gap-y-[40px] max-475px:!gap-y-[30px] gap-x-[20px] gap-y-[80px]">
                <CatalogCard />
                <CatalogCard />
                <CatalogCard />
                <CatalogCard />
                <CatalogCard />
                <CatalogCard />
            </div>
            <div className="mt-[40px]">
                <Pagination />
            </div>
        </Wrapper>
    )
}
