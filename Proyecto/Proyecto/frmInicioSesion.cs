using System;
using System.Windows.Forms;

namespace Proyecto
{
    public partial class frmInicioSesion : Form
    {
        public frmInicioSesion()
        {
            InitializeComponent();
        }

        private void btnContinuar_Click(object sender, EventArgs e)
        {
            string nombre = txtUsuario.Text;
            string telefono = txtContraseña.Text;
            Usuario usu = UsuarioDAO.Existe(nombre, telefono);

            if (usu.nombre.Length > 0)
            {
                MessageBox.Show("Bienvenido!", "Blockbuster",
                    MessageBoxButtons.OK, MessageBoxIcon.Information);
                frmUser ventana = new frmUser(usu);
                ventana.Show();
                this.Hide();
            }
            else
            {
                MessageBox.Show("Credenciales erróneas!", "Blockbuster",
                    MessageBoxButtons.OK, MessageBoxIcon.Exclamation);
            }
        }
    }
}