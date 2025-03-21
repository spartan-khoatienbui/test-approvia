import { LocationType } from "~/__generated__/api/types/swagger";
import { Maybe } from "~shared/types/base.type";

export function getUserLocation(locationType: Maybe<LocationType>) {
  if (!locationType) return "-";

  const LOCATION = {
    [LocationType.Dn]: "Da Nang",
    [LocationType.Hcm]: "Ho Chi Minh",
    [LocationType.Us]: "US",
    [LocationType.Ukraine]: "Ukraine",
  };

  return LOCATION[locationType];
}
