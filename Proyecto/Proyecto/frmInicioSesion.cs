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
            string user = txtUsuario.Text;
            string contraseña = txtContraseña.Text;
            Usuario usu = UsuarioDAO.Existe(user, contraseña);

            if (usu.user.Length > 0)
            {
                MessageBox.Show("Bienvenido!", "BINAES",
                    MessageBoxButtons.OK, MessageBoxIcon.Information);
                frmAdministrador ventana = new frmAdministrador(usu);
                ventana.Show();
                this.Hide();
            }
            else
            {
                MessageBox.Show("Credenciales erróneas!", "BINAES",
                    MessageBoxButtons.OK, MessageBoxIcon.Exclamation);
            }
        }
    }
    
}