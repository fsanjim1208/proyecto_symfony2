<?php
namespace App\Controller;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Mesa;
use App\Entity\Evento;
use App\Entity\Juego;
use App\Entity\Tramo;
use App\Repository\JuegoRepository;
use Doctrine\Persistence\ManagerRegistry;
use Knp\Component\Pager\PaginatorInterface;

    class MiController extends AbstractController
    {

        public function __construct(private ManagerRegistry $doctrine) {}

        #[Route('/eo', name: 'eo')]
        public function index(): Response
        {
            return $this->render('eo/eo.html.twig', [
                'controller_name' => 'MainController',
            ]);
        }

        #[Route('/home', name: 'app_home')]
        public function home(  Request $request,ManagerRegistry $doctrine):response
        {

            $entityManager= $doctrine->getManager();
            $juego1 = $this->doctrine
            ->getRepository(Juego::class)
            ->findOneById(6);

            $entityManager= $doctrine->getManager();
            $juego2 = $this->doctrine
            ->getRepository(Juego::class)
            ->findOneById(8);

            $entityManager= $doctrine->getManager();
            $juego3 = $this->doctrine
            ->getRepository(Juego::class)
            ->findOneById(3);

            $entityManager= $doctrine->getManager();
            $juego4 = $this->doctrine
            ->getRepository(Juego::class)
            ->findOneById(2);

            $entityManager= $doctrine->getManager();
            $evento1 = $this->doctrine
            ->getRepository(Evento::class)
            ->findOneById(1);

            $entityManager= $doctrine->getManager();
            $evento2 = $this->doctrine
            ->getRepository(Evento::class)
            ->findOneById(5);

            $entityManager= $doctrine->getManager();
            $evento3 = $this->doctrine
            ->getRepository(Evento::class)
            ->findOneById(6);

            $entityManager= $doctrine->getManager();
            $evento4 = $this->doctrine
            ->getRepository(Evento::class)
            ->findOneById(7);

            return $this->render('main/home.html.twig',[
                'juego1' => $juego1,
                'juego2' => $juego2,
                'juego3' => $juego3,
                'juego4' => $juego4,
                'evento1' => $evento1,
                'evento2' => $evento2,
                'evento3' => $evento3,
                'evento4' => $evento4,
            ]);
        }



        #[Route('/homes')]
        public function homes(  Request $request):response
        {

            $mesa = $this->doctrine
            ->getRepository(Mesa::class)
            ->find(1);
            return $this->render('mesas.html.twig',['mesa'=>$mesa]);
        }

        #[Route('/mesas')]
        public function mesas( Request $request):response
        {
        
            return $this->render('mesas.html.twig');
        }

        



        
        

        

        // #[Route('/editaJuegos/{id}' , name:"app_edita_juegos")]
        // public function editajuegos($id)
        // {

        //     $juego = $this->doctrine
        //     ->getRepository(Juego::class)
        //     ->find($id);
    
        //     return $this->render('Editar/editaJuegos.html.twig',['juego' => $juego]);
        // }

    }
?>