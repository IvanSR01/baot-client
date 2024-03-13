import Intro from "@/compenents/intro/Intro.tsx";
import Header from "@/compenents/header/Header.tsx";
import Footer from "@/compenents/footer/Footer.tsx";
import Wrapper from "@/compenents/wrapper/Wrapper.tsx";
import {CatalogFilter} from "@/screens/catalog/components/catalog_filter";
import {CatalogGrid} from "@/screens/catalog/components/catalog_grid";
import {CatalogProvider} from "@/screens/catalog/CatalogProvider.tsx";

export const Catalog = () => {
    return (
        <CatalogProvider>
            <div className="overflow-x-clip">
                <Header></Header>
                <Intro className="!py-[56px]">
                    <Wrapper>
                        <h2 className="tracking-4% text-[60px] leading-[61px] text-left font-normal max-834px:!text-[28px] max-834px:leading-[28px]">Аренда
                            яхт</h2>
                        <p className="tracking-2% text-[1rem] leading-[23px] font-semibold mt-[10px] max-834px:!text-[12px] max-834px:leading-[23px]">Главная/Аренда
                            яхт/Аренда яхт без капитана</p>
                    </Wrapper>
                </Intro>
                <CatalogFilter className="mb-[40px]"></CatalogFilter>
                <CatalogGrid></CatalogGrid>
                <Footer/>
            </div>
        </CatalogProvider>
    )
}