import React from 'react';
import Notiflix from 'notiflix';
import { CircularProgress, Container, Stack, } from "@mui/material";
import Form from "../components/Form";
import Link from "../components/Link";
import { useAddLinkMutation, useFetchLinksQuery, useDelLinkMutation, useUpdateLinkMutation, ILink } from '../store/slices/links-slice';
import * as ExcelJS from 'exceljs';

export function MainPage() {
  const wrap = () => {
    console.log('dgfgd')
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Sensor Data');
    const fakeData =  {
      address: "well st",
      description: "180036710",
      fromTotal: 1.365
    };
    worksheet.columns = [
      { header: 'address', key: 'address', width: 10 },
      { header: 'description', key: 'description', width: 32, style: { font: { name: 'Arial Black' } } },
      { header: 'fromTotal.', key: 'fromTotal', width: 10, style: { numFmt: 'dd/mm/yyyy' } }
    ];
    worksheet.addRow(fakeData).commit();
    return workbook.xlsx.writeFile("test.xlsx");
  };
    // const { data, isLoading, error } = useFetchLinksQuery();
    // const [addLink, { error: errorAdd }] = useAddLinkMutation();
    // const [deleteLink, { error: errorDel }] = useDelLinkMutation();
    // const [updateLink, { error: errorUpdate }] = useUpdateLinkMutation();
    
    // const throwError = (e: any) => {
    //     const message = e.data?.message ? e.data?.message : e.data[0]
    //     Notiflix.Notify.failure(message)
    // }
    // if (error) throwError(error)
    // if (errorAdd) throwError(errorAdd)
    // if (errorDel) throwError(errorDel)
    // if (errorUpdate) throwError(errorUpdate)
        
    // if (errorAdd) {
    //     const message = (errorAdd as any).data?.message ? (errorAdd as any).data?.message : (errorAdd as any).data[0]
    //     Notiflix.Notify.failure(message)
    // }
    return (
      <Container sx={{ mt: '1rem' }}>
        <button type='button' onClick={() => wrap()}>excel</button>
        {/* {isLoading && (
          <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
            <CircularProgress color="secondary" />
            <CircularProgress color="success" />
            <CircularProgress color="inherit" />
          </Stack>
        )}
        <Form
          onCreate={(linkPath: string) => addLink({ linkPath })}
          buttonTitle="Add"
        />
        {data &&
          data.map((link) => (
            <Link
              key={link.id}
              id={link.id}
              linkPath={link.linkPath}
              onClickDel={(id: number) => deleteLink(id)}
              onClickUpdate={(link: ILink) => updateLink(link)}
            />
          ))} */}
      </Container>
    );
}