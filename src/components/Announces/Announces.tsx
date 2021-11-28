import React, { useState } from 'react';

import {useFetch} from '../../utils/hooks/useFetch';
import {AnnounceCard} from "./AnnounceCard/AnnounceCard";
import {AnimatePresence} from "framer-motion";
import {AnnounceControls} from "./AnnounceControls/AnnounceControls";
import {Center} from "@chakra-ui/react";
import { NoData } from '../NoData/NoData';
import {AnnounceSkeleton} from "../ui";

type announceT = {
    date?: string,
    time?: string,
    title: string,
    desc: string,
    id: string,
};

export const Announces = () => {
    const adminParams = {
        numOfAnnounces: 3,
        autoplay: false
    };

    const {data, loading, error} = useFetch('./fakeData.json');
    const [activeAnnounce, setActiveAnnounce] = useState(0);

    let announcesQty = 0;

    const announces = data && data.announcesData.length > 0 ? data.announcesData
        .filter((_, i : number) => i + 1 < adminParams.numOfAnnounces)
        .map((elem : announceT, index : number) => {
        announcesQty++;
        return <AnnounceCard key={elem.id} index={index} activeAnnounce={activeAnnounce} {...elem}/>
    }) : <NoData text="Актуальных объявлений нет"/>;



    const errorMsg = error ? <p>Произошла ошибка ({error})</p> : null;

    return (
        <>
            {loading && <AnnounceSkeleton/>}
            {data &&
            <>
              <AnimatePresence initial={false}>
                <Center mb="30px">
                  <AnnounceControls
                    num={announcesQty}
                    activeAnnounce={activeAnnounce}
                    setActiveAnnounce={setActiveAnnounce}
                  />
                </Center>
                  {announces}
              </AnimatePresence>
            </>}
            {error && errorMsg}
        </>
    )
};
