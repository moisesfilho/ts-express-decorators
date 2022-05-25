import { Request, Response } from 'express';
import Controller from '../utils/decorators/controller.decorator';
import { Get, Post } from '../utils/decorators/handlers.decorator';

@Controller('/clientes')
export default class ClientesController {
  private clientes: Array<{ nome: string }> = [{ nome: 'Antonio' }, { nome: 'Francisca' }];

  @Get('')
  public index(req: Request, res: Response): void {
    res.json({ clientes: this.clientes });
  }

  @Post('')
  public add(req: Request, res: Response): void {
    this.clientes.push(req.body);
    res.status(204).json();
  }

  @Get('/:nome')
  public findBynome(req: Request, res: Response): unknown {
    const { nome } = req.params;
    const foundCat = this.clientes.find((c) => c.nome === nome);
    
    if (foundCat) {
      return res.json({ cat: foundCat });
    }
    
    return res.status(404).json({ message: 'Cliente não encontrado!' });
  }
}
