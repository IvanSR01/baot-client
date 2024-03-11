import Intro from "@/compenents/intro/Intro.tsx";
import Header from "@/compenents/header/Header.tsx";
import Footer from "@/compenents/footer/Footer.tsx";
import Wrapper from "@/compenents/wrapper/Wrapper.tsx";
import {CatalogFilter} from "@/screens/catalog/components/catalog_filter";
import {CatalogGrid} from "@/screens/catalog/components/catalog_grid";
import {CatalogProvider} from "@/screens/catalog/CatalogContext.tsx";

export const Catalog = () => {
    return (
        <CatalogProvider>
            <Header></Header>
            <Intro className="!py-[56px]">
                <Wrapper>
                    <h2 className="tracking-4% text-[60px] leading-[61px] text-left font-normal">Аренда яхт</h2>
                    <p className="tracking-2% text-[1rem] leading-[23px] font-medium mt-[10px]">Главная/Аренда
                        яхт/Аренда яхт без капитана</p>
                </Wrapper>
            </Intro>
            <CatalogFilter className="mb-[40px]"></CatalogFilter>
            <CatalogGrid></CatalogGrid>
            <Footer/>
        </CatalogProvider>
    )
}