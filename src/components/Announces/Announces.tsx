import React from 'react';

import {useFetch} from '../../utils/hooks/useFetch';
import {AnnounceCard} from "./AnnounceCard/AnnounceCard";
import {Center} from "@chakra-ui/react";
import {Skeletons} from '../ui';
import {AnimatePresence} from "framer-motion";

export const Announces = () => {
    const {data, loading, error} = useFetch('./fakeData.json');

    const announces = data && data.announcesData.length > 0 ? data.announcesData.map((elem) => (
        <AnnounceCard key={elem.id} {...elem}/>
    )) : <p>Список объявлений пуст</p>;

    const errorMsg = error ? <p>Произошла ошибка ({error})</p> : null;

    return (
        <>
            {loading && <Skeletons type="announce"/>}
            {data &&
            <>
              <AnimatePresence initial={false}>
                  {announces}
              </AnimatePresence>
            </>}
            {error && errorMsg}
        </>
    )
};