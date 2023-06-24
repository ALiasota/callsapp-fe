import React from 'react';
import Notiflix from 'notiflix';
import { CircularProgress, Container, Stack, } from "@mui/material";
import Form from "../components/Form";
import Link from "../components/Link";
import { useAddLinkMutation, useFetchLinksQuery, useDelLinkMutation, useUpdateLinkMutation, ILink } from '../store/slices/links-slice';

export function MainPage() {

    const { data, isLoading, error } = useFetchLinksQuery();
    const [addLink, { error: errorAdd }] = useAddLinkMutation();
    const [deleteLink, { error: errorDel }] = useDelLinkMutation();
    const [updateLink, { error: errorUpdate }] = useUpdateLinkMutation();
    
    const throwError = (e: any) => {
        const message = e.data?.message ? e.data?.message : e.data[0]
        Notiflix.Notify.failure(message)
    }
    if (error) throwError(error)
    if (errorAdd) throwError(errorAdd)
    if (errorDel) throwError(errorDel)
    if (errorUpdate) throwError(errorUpdate)
        
    if (errorAdd) {
        const message = (errorAdd as any).data?.message ? (errorAdd as any).data?.message : (errorAdd as any).data[0]
        Notiflix.Notify.failure(message)
    }
    return (
      <Container sx={{ mt: '1rem' }}>
        {isLoading && (
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
          ))}
      </Container>
    );
}