"use client"
import {YMaps, Map} from '@pbe/react-yandex-maps';
import Wrapper from "@/compenents/wrapper/Wrapper.tsx";
import {CatalogCard} from "@/screens/catalog/components/catalog_card";
import {Pagination} from "@/compenents/pagination";

export const CatalogModal = () => {
    return (
        <div>
            <YMaps>
                <Map style={{width: "100%", height: "500px"}} defaultState={{center: [55.75, 37.57], zoom: 9}}></Map>
            </YMaps>

            <Wrapper className="!mb-[100px]">
                <div className="mt-[92px] mb-[1.5rem]">
                    <h4 className="font-medium text-[40px] tracking-4% leading-[48px]">Популярные предложения</h4>
                    <div className="grid grid-cols-3 gap-[20px] mt-[20px]">
                        <CatalogCard/>
                        <CatalogCard/>
                        <CatalogCard/>
                    </div>
                </div>
                <Pagination/>
            </Wrapper>
        </div>
    )
}