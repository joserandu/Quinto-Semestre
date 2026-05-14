#include <GL/glut.h>

// Variáveis para controlar os ângulos de rotação nos eixos X e Y
float angulox = 0.0f;
float anguloY = 0.0f;

// Função de desenho
void desenha() {
// Limpa o buffer de cor e profundidade
glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);

// Seleciona a matriz de modelagem/visualização
glMatrixMode(GL_MODELVIEW);
glLoadIdentity();

// Afasta o cubo da câmera
glTranslatef(0.0f, 0.0f, -5.0f);

// Aplica rotações nos eixos X e Y
glRotatef(angulox, 1.0f, 0.0f, 0.0f);
glRotatef(anguloY, 0.0f, 1.0f, 0.0f);

// Desenha o cubo
glBegin(GL_QUADS);

// Face frontal (vermelha)
glColor3f(1.0f, 0.0f, 0.0f);
glVertex3f(-1.0f, -1.0f, 1.0f);
glVertex3f( 1.0f, -1.0f, 1.0f);
glVertex3f( 1.0f, 1.0f, 1.0f);
glVertex3f(-1.0f, 1.0f, 1.0f);

// Face traseira (verde)
glColor3f(0.0f, 1.0f, 0.0f);
glVertex3f(-1.0f, -1.0f, -1.0f);
glVertex3f(-1.0f, 1.0f, -1.0f);
glVertex3f( 1.0f, 1.0f, -1.0f);
glVertex3f( 1.0f, -1.0f, -1.0f);

// Face superior (azul)
glColor3f(0.0f, 0.0f, 1.0f);
glVertex3f(-1.0f, 1.0f, -1.0f);
glVertex3f(-1.0f, 1.0f, 1.0f);
glVertex3f( 1.0f, 1.0f, 1.0f);
glVertex3f( 1.0f, 1.0f, -1.0f);

// Face inferior (amarela)
glColor3f(1.0f, 1.0f, 0.0f);
glVertex3f(-1.0f, -1.0f, -1.0f);
glVertex3f( 1.0f, -1.0f, -1.0f);
glVertex3f( 1.0f, -1.0f, 1.0f);
glVertex3f(-1.0f, -1.0f, 1.0f);

// Face direita (ciano)
glColor3f(0.0f, 1.0f, 1.0f);
glVertex3f( 1.0f, -1.0f, -1.0f);
glVertex3f( 1.0f, 1.0f, -1.0f);
glVertex3f( 1.0f, 1.0f, 1.0f);
glVertex3f( 1.0f, -1.0f, 1.0f);

// Face esquerda (magenta)
glColor3f(1.0f, 0.0f, 1.0f);
glVertex3f(-1.0f, -1.0f, -1.0f);
glVertex3f(-1.0f, -1.0f, 1.0f);
glVertex3f(-1.0f, 1.0f, 1.0f);
glVertex3f(-1.0f, 1.0f, -1.0f);

glEnd();

glutSwapBuffers();
}

// Função chamada quando a janela é redimensionada
void redimensiona(int w, int h) {
if (h == 0) h = 1; // evita divisão por zero
float aspect = (float)w / (float)h;

glViewport(0, 0, w, h);
glMatrixMode(GL_PROJECTION);
glLoadIdentity();
gluPerspective(45.0f, aspect, 1.0f, 100.0f);
}

// Função para atualizar os ângulos (animação)
void atualiza(int value) {
angulox += 1.0f; // rotaciona no eixo X
anguloY += 1.0f; // rotaciona no eixo Y
if (angulox > 360) angulox -= 360;
if (anguloY > 360) anguloY -= 360;

glutPostRedisplay(); // redesenha a cena
glutTimerFunc(16, atualiza, 0); // aproximadamente 60 FPS
}

int main(int argc, char** argv) {
glutInit(&argc, argv);
glutInitDisplayMode(GLUT_DOUBLE | GLUT_RGB | GLUT_DEPTH);
glutInitWindowSize(800, 600);
glutCreateWindow("Cubo 3D Rotativo");

glEnable(GL_DEPTH_TEST); // ativa teste de profundidade

glutDisplayFunc(desenha);
glutReshapeFunc(redimensiona);
glutTimerFunc(0, atualiza, 0);

glutMainLoop();
return 0;
}

