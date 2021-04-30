import { Request, Response, NextFunction } from "express";
import HttpException from "../exceptions/http.exception";

export default function errorMiddleware(error:HttpException, request: Request, response: Response) {
    const status = error.status || 500;
    const message = error.message || 'Internal server error: Something went wrong!';

    response
        .status(status)
        .send({
            status,
            message
        });
};