import { configureStore } from "@reduxjs/toolkit";
import homePageReducer from "./slices/homePageSlice";
import { AuthenticationApi } from "./apis/auth/authentication.api";
import AuthSlice from "@/store/slices/authslice";
import tableMapSlice from "@/store/slices/tableCQL.slice";
import themeSlice from "@/store/slices/themeSlice";
import MapSlice from "@/store/slices/mapSlice";
import descentSlice from "@/store/slices/descent.slice";
import AllTableSlice from "@/store/slices/tables-pagiations-slices/all-table-slices";
import { NeedExpressionSheetApi } from "./apis/public-lighting/corrective-maintenance/need-expression-sheet-api";
import { MaterialApi } from "./apis/public-lighting/corrective-maintenance/materials.api";
import { CoreApi } from "./apis/core";
import { ClaimApi } from "./apis/public-lighting/corrective-maintenance/claim.api";
import { DescentApi } from "./apis/public-lighting/preventive-maintenance/descent.api";
import mapSlice from "./slices/form-map/mapSlice";
import NeesheetTableSlice from "./slices/tables-pagiations-slices/needsheet-table.slices";
import GeoTableSlice from "./slices/tables-pagiations-slices/geoTable.slice";
import { DiagnosticsApi } from "./apis/public-lighting/corrective-maintenance/diagnostics.api";
import { InterventionApi } from "./apis/public-lighting/corrective-maintenance/intervention-api";
import { LampmeterApi } from "./apis/public-lighting/streetlamp-consumption/lampmeter.api";
import { ConsumptionApi } from "./apis/public-lighting/streetlamp-consumption/consumption.api";
import { StreetLightApi } from "./apis/public-lighting/street-light/street-light.api";
import { StreetLightCategorieApi } from "./apis/public-lighting/street-light/street-light-categorie.api";
import { CabinetApi } from "./apis/public-lighting/streetlamp-consumption/cabinet.api";
import { FetchFileAPI } from "./apis/fetchFile";
import { AdministrativeApi } from "./apis/administrative-delimitation.api";
import { ParticipantsApi } from "./apis/participants.api";
import publicLightingViewParamsSlice from "./slices/publicLightingViewParamsSlice";
import { SignalisationApi } from "./apis/roads/signalisation/signalisation.api";
import { SanitaryEstablishmentApi } from "./apis/sanitary/sanitary-establishment.api";
import { StatisticsDiseApi } from "./apis/sanitary/statistics-disease.api";
import { TechnicalPlatformsApi } from "./apis/sanitary/technical-platforms.api";
import { SportVenueApi } from "./apis/urban-planning/equipments/sports-venues/sport-venues.api";
import { SignalisationDegradationApi } from "./apis/roads/signalisation/signalisation-degradation.api";
import { LandfillsApi } from "./apis/watse-collection/landfills/landfill.api";
import { SchoolApi } from "./apis/urban-planning/equipments/schools/schools.api";
import { SignalisationNeedsApi } from "./apis/roads/signalisation/signalisation-needs.api";
import { SignalisationInterventionApi } from "./apis/roads/signalisation/signalisation-intervention.api";
import { RoadNetworkApi } from "./apis/roads/road-network/road-network.api";
import { HydrantApi } from "./apis/urban-planning/equipments/hydrants/hydrants.api";
import { EntertainmentApi } from "./apis/urban-planning/equipments/entertainment-space/entertainement.api";
import { WorkOfArtApi } from "./apis/urban-planning/equipments/work-of-art/work-of-art.api";
import { FeederLineApi } from "./apis/urban-planning/equipments/feeder-line/feeder-line.api";
import { BrtLineApi } from "./apis/urban-planning/equipments/brt-line/brt-line.api";
import { CollectionPointsApi } from "./apis/watse-collection/collection-point/collection-point.api";
import { EquipementApi } from "./apis/sanitary/equipement.api";
import { DescentProgramApi } from "./apis/sanitary/descent-programs.api";
import { ConsumablesApi } from "./apis/sanitary/consumables.api";
import { InfrastructuresApi } from "./apis/sanitary/infrastructures.api";
import { SanitaryInterventionsApi } from "./apis/sanitary/sanitary-intervention.api";
import { NeedsSheetApi } from "./apis/sanitary/needs-sheet.api";
import { PersonnelApi } from "./apis/sanitary/personnel.api";
import { HealthAreaApi } from "./apis/sanitary/healt-area.api";
import { SubContractorApi } from "./apis/watse-collection/subcontractor/subcontractor.api";
import { RoadParticipantsApi } from "./apis/roads/road-participants.api";
import { RoadDegradationApi } from "./apis/roads/road-network/road-degradation.api";
import { DrainApi } from "./apis/roads/drain-network/drain.api";
import GeoSelectedIdsSlice from "./slices/tables-pagiations-slices/geoSelectedIds.slice";
import { RavineApi } from "./apis/urban-planning/equipments/ravine/ravine.api";
import { GreenSpaceApi } from "./apis/urban-planning/green-space/green-space.api";
import { RoadDiagnosticApi } from "./apis/roads/road-network/road-diagnostic.api";
import { RoadNeedsApi } from "./apis/roads/road-network/road-needs.api";
import { RoadInterventionApi } from "./apis/roads/road-network/road-intervention.api";
import { HealthDistrictApi } from "./apis/sanitary/health-district.api";
import { CollectionPointInterventionsApi } from "./apis/watse-collection/collection-point/collection-point-intervention.api";
import { CollectionPointRequestsApi } from "./apis/watse-collection/requests/requests.api";
import { DrainInterventionApi } from "./apis/roads/drain-network/drain-intervention.api";
import { DrainBlockageApi } from "./apis/roads/drain-network/drain-blockage.api";
import { DrainNeedsApi } from "./apis/roads/drain-network/drain-needs.api";
import { TransferCenterApi } from "./apis/watse-collection/transfer-stations/stranfert-station.api";
import { LandUsePlanApi } from "./apis/urban-planning/land-use-plan/land-use-plan.api";
import { HealthAreaNoPageApi } from "./apis/sanitary/healt-area-no-page.api";
import { CollectionRouteApi } from "./apis/watse-collection/collection-route/collection-route.api";
import { ContractApi } from "./apis/watse-collection/subcontractor/contract.api";
import { EtablishmentEquipementApi } from "./apis/sanitary/etablishmentEquipment.api";
import { EquipmentNoPageApi } from "./apis/sanitary/equipment_no_page";
import { HealthdistrictNoPageApi } from "./apis/sanitary/healt-district-no-page.api";
import { DiseaseApi } from "./apis/administrative-deases.api";
import { IdgClaimApi } from "./apis/idg-claims.api";
import { GroupsApi } from "./apis/auth/groups.api";
import { PermissionApi } from "./apis/auth/permissions.api";
import { ConsumablesApiNoPage } from "./apis/sanitary/consumables-no-page.api";
import { InfrastructuresApiNoPage } from "./apis/sanitary/infrastructures-no-page.api";
import { PersonnelApiNoPage } from "./apis/sanitary/personnel-no-page.api";
import { EtablishmentDiseaseApi } from "./apis/sanitary/etablishmentDisease.api";
import { EtablishmentPersonnalApi } from "./apis/sanitary/etablishmentPersannal.api";
import { PersonnalNoPageApi } from "./apis/sanitary/personnal_no_page";
import { DiseaseNoPageApi } from "./apis/sanitary/disease_no_page";
import { PersonnelAdminApi } from "./apis/administrative-personnel.api";

export const store = configureStore({
  reducer: {
    auth: AuthSlice,
    tableMap: tableMapSlice,
    theme: themeSlice,
    decent: descentSlice,
    publicLightingViewParams: publicLightingViewParamsSlice,

    // wasteCollectionViewParams: wasteCollectionViewParamsSlice,
    // wasteCollectionViewParams: wasteCollectionViewParamsSlice,
    // wasteCollectionViewParams: wasteCollectionViewParamsSlice,
    isHomePage: homePageReducer,
    map: mapSlice,
    mapSlice: MapSlice,
    needSheetTable: NeesheetTableSlice,
    // observationSheetTable: NeesheetTableSlice,
    geoTable: GeoTableSlice,
    AllTableSlice: AllTableSlice,
    geoSelectedIds: GeoSelectedIdsSlice,
    [AuthenticationApi.reducerPath]: AuthenticationApi.reducer,
    [IdgClaimApi.reducerPath]: IdgClaimApi.reducer,
    [GroupsApi.reducerPath]: GroupsApi.reducer,
    [AdministrativeApi.reducerPath]: AdministrativeApi.reducer,
    [ParticipantsApi.reducerPath]: ParticipantsApi.reducer,
    [NeedExpressionSheetApi.reducerPath]: NeedExpressionSheetApi.reducer,
    [MaterialApi.reducerPath]: MaterialApi.reducer,
    [CoreApi.reducerPath]: CoreApi.reducer,
    [ClaimApi.reducerPath]: ClaimApi.reducer,
    [SportVenueApi.reducerPath]: SportVenueApi.reducer,
    [DescentApi.reducerPath]: DescentApi.reducer,
    // [ObservationSheetApi.reducerPath]: ObservationSheetApi.reducer,
    [InterventionApi.reducerPath]: InterventionApi.reducer,
    [ConsumptionApi.reducerPath]: ConsumptionApi.reducer,
    [DiagnosticsApi.reducerPath]: DiagnosticsApi.reducer,
    [LampmeterApi.reducerPath]: LampmeterApi.reducer,
    [StreetLightApi.reducerPath]: StreetLightApi.reducer,
    [CabinetApi.reducerPath]: CabinetApi.reducer,
    [StreetLightCategorieApi.reducerPath]: StreetLightCategorieApi.reducer,
    [FetchFileAPI.reducerPath]: FetchFileAPI.reducer,
    [SignalisationApi.reducerPath]: SignalisationApi.reducer,
    [SanitaryEstablishmentApi.reducerPath]: SanitaryEstablishmentApi.reducer,
    [StatisticsDiseApi.reducerPath]: StatisticsDiseApi.reducer,
    [TechnicalPlatformsApi.reducerPath]: TechnicalPlatformsApi.reducer,
    [SignalisationDegradationApi.reducerPath]:
      SignalisationDegradationApi.reducer,
    [LandfillsApi.reducerPath]: LandfillsApi.reducer,
    [SchoolApi.reducerPath]: SchoolApi.reducer,
    [SignalisationNeedsApi.reducerPath]: SignalisationNeedsApi.reducer,
    [SignalisationInterventionApi.reducerPath]:
      SignalisationInterventionApi.reducer,
    [RoadNetworkApi.reducerPath]: RoadNetworkApi.reducer,
    [HydrantApi.reducerPath]: HydrantApi.reducer,
    [EntertainmentApi.reducerPath]: EntertainmentApi.reducer,
    [WorkOfArtApi.reducerPath]: WorkOfArtApi.reducer,
    [FeederLineApi.reducerPath]: FeederLineApi.reducer,
    [BrtLineApi.reducerPath]: BrtLineApi.reducer,
    [CollectionPointsApi.reducerPath]: CollectionPointsApi.reducer,
    [CollectionPointInterventionsApi.reducerPath]:
      CollectionPointInterventionsApi.reducer,
    [EquipementApi.reducerPath]: EquipementApi.reducer,
    [DescentProgramApi.reducerPath]: DescentProgramApi.reducer,
    [ConsumablesApi.reducerPath]: ConsumablesApi.reducer,
    [InfrastructuresApi.reducerPath]: InfrastructuresApi.reducer,
    [SanitaryInterventionsApi.reducerPath]: SanitaryInterventionsApi.reducer,
    [NeedsSheetApi.reducerPath]: NeedsSheetApi.reducer,
    [PersonnelApi.reducerPath]: PersonnelApi.reducer,
    [HealthAreaApi.reducerPath]: HealthAreaApi.reducer,
    [SubContractorApi.reducerPath]: SubContractorApi.reducer,
    [RoadParticipantsApi.reducerPath]: RoadParticipantsApi.reducer,
    [RoadDegradationApi.reducerPath]: RoadDegradationApi.reducer,
    [RavineApi.reducerPath]: RavineApi.reducer,
    [DrainApi.reducerPath]: DrainApi.reducer,
    [GreenSpaceApi.reducerPath]: GreenSpaceApi.reducer,
    [RoadDiagnosticApi.reducerPath]: RoadDiagnosticApi.reducer,
    [RoadNeedsApi.reducerPath]: RoadNeedsApi.reducer,
    [RoadInterventionApi.reducerPath]: RoadInterventionApi.reducer,
    [HealthDistrictApi.reducerPath]: HealthDistrictApi.reducer,
    [CollectionPointRequestsApi.reducerPath]:
      CollectionPointRequestsApi.reducer,
    [DrainBlockageApi.reducerPath]: DrainBlockageApi.reducer,
    [DrainNeedsApi.reducerPath]: DrainNeedsApi.reducer,
    [DrainInterventionApi.reducerPath]: DrainInterventionApi.reducer,
    [TransferCenterApi.reducerPath]: TransferCenterApi.reducer,
    [LandUsePlanApi.reducerPath]: LandUsePlanApi.reducer,
    [HealthAreaNoPageApi.reducerPath]: HealthAreaNoPageApi.reducer,
    [CollectionRouteApi.reducerPath]: CollectionRouteApi.reducer,
    [EtablishmentEquipementApi.reducerPath]: EtablishmentEquipementApi.reducer,
    [EquipmentNoPageApi.reducerPath]: EquipmentNoPageApi.reducer,
    [HealthdistrictNoPageApi.reducerPath]: HealthdistrictNoPageApi.reducer,
    [ContractApi.reducerPath]: ContractApi.reducer,
    [DiseaseApi.reducerPath]: DiseaseApi.reducer,
    [PermissionApi.reducerPath]: PermissionApi.reducer,
    [ConsumablesApiNoPage.reducerPath]: ConsumablesApiNoPage.reducer,
    [InfrastructuresApiNoPage.reducerPath]: InfrastructuresApiNoPage.reducer,
    [PersonnelApiNoPage.reducerPath]: PersonnelApiNoPage.reducer,
    [EtablishmentDiseaseApi.reducerPath]: EtablishmentDiseaseApi.reducer,
    [EtablishmentPersonnalApi.reducerPath]: EtablishmentPersonnalApi.reducer,
    [PersonnalNoPageApi.reducerPath]: PersonnalNoPageApi.reducer,
    [DiseaseNoPageApi.reducerPath]: DiseaseNoPageApi.reducer,
    [PersonnelAdminApi.reducerPath]: PersonnelAdminApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      AuthenticationApi.middleware,
      GroupsApi.middleware,
      TransferCenterApi.middleware,
      NeedExpressionSheetApi.middleware,
      MaterialApi.middleware,
      AdministrativeApi.middleware,
      CoreApi.middleware,
      ClaimApi.middleware,
      DescentApi.middleware,
      InterventionApi.middleware,
      DiagnosticsApi.middleware,
      StreetLightCategorieApi.middleware,
      StreetLightApi.middleware,
      LampmeterApi.middleware,
      ConsumptionApi.middleware,
      IdgClaimApi.middleware,
      PersonnelAdminApi.middleware,
      // ObservationSheetApi.middleware,
      CabinetApi.middleware,
      SportVenueApi.middleware,
      FetchFileAPI.middleware,
      SignalisationApi.middleware,
      SanitaryEstablishmentApi.middleware,
      StatisticsDiseApi.middleware,
      TechnicalPlatformsApi.middleware,
      SignalisationDegradationApi.middleware,
      LandfillsApi.middleware,
      SchoolApi.middleware,
      SignalisationNeedsApi.middleware,
      SignalisationInterventionApi.middleware,
      RoadNetworkApi.middleware,
      HydrantApi.middleware,
      WorkOfArtApi.middleware,
      EntertainmentApi.middleware,
      FeederLineApi.middleware,
      BrtLineApi.middleware,
      CollectionPointsApi.middleware,
      CollectionPointInterventionsApi.middleware,
      PersonnelApi.middleware,
      NeedsSheetApi.middleware,
      SanitaryInterventionsApi.middleware,
      InfrastructuresApi.middleware,
      ConsumablesApi.middleware,
      DescentProgramApi.middleware,
      EquipementApi.middleware,
      HealthAreaApi.middleware,
      SubContractorApi.middleware,
      RoadParticipantsApi.middleware,
      RoadDegradationApi.middleware,
      RavineApi.middleware,
      DrainApi.middleware,
      GreenSpaceApi.middleware,
      RoadDiagnosticApi.middleware,
      RoadNeedsApi.middleware,
      HealthDistrictApi.middleware,
      CollectionPointRequestsApi.middleware,
      DrainBlockageApi.middleware,
      DrainNeedsApi.middleware,
      DrainInterventionApi.middleware,
      RoadInterventionApi.middleware,
      LandUsePlanApi.middleware,
      HealthAreaNoPageApi.middleware,
      CollectionRouteApi.middleware,
      EtablishmentEquipementApi.middleware,
      EquipmentNoPageApi.middleware,
      HealthdistrictNoPageApi.middleware,
      ContractApi.middleware,
      DiseaseApi.middleware,
      PermissionApi.middleware,
      ParticipantsApi.middleware,
      ConsumablesApiNoPage.middleware,
      InfrastructuresApiNoPage.middleware,
      PersonnelApiNoPage.middleware,
      EtablishmentDiseaseApi.middleware,
      EtablishmentPersonnalApi.middleware,
      PersonnalNoPageApi.middleware,
      DiseaseNoPageApi.middleware
    ),
  devTools: false,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
