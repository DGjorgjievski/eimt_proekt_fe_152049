import React, { useEffect, useState } from "react";
import { Box } from "@material-ui/core";
import { cardData } from "../../pages/Home/Home.data";
import { TableItem } from "../TableItem/TableItem";
import { LocationModal } from "../LocationModal/LocationModal";
import { LocationType } from "../../config";
import { getLocals } from "../../pages/Home/Home.service";

export const LocationsList = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeLocation, setActiveLocation] = useState<LocationType | null>(
    null
  );
  const [retrievedData, setRetrievedData] = useState<any>(null);

  const handleModal = (id: any) => {
    setIsVisible(!isVisible);
    setActiveLocation(
      retrievedData.find((location: any) => location.id === id)
    );
  };

  useEffect(() => {
    getLocals().then((res) => setRetrievedData(res));
  }, []);

  return (
    <Box>
      {!!retrievedData &&
        retrievedData.map((local: any) => (
          <TableItem
            key={local.id}
            title={local.name}
            content={local.location}
            image={local.localImage}
            id={local.id}
            handleModal={handleModal}
          />
        ))}
      <LocationModal
        location={activeLocation}
        isVisible={isVisible}
        handleModal={handleModal}
      />
    </Box>
  );
};
