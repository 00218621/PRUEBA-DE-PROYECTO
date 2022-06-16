<<<<<<< HEAD
=======
using System;
using System.Drawing;
>>>>>>> David
using System.Windows.Forms;

namespace Proyecto
{
    public partial class frmUser : Form
<<<<<<< HEAD
=======
    
>>>>>>> David
    {
        public frmUser()
        {
            InitializeComponent();
        }
<<<<<<< HEAD
=======
        private Usuario usu { get; set; }
        
        public frmUser(Usuario usu)
        {
            InitializeComponent();
            this.usu = usu;
        }


        private void btnModificar_Click(object sender, EventArgs e)
        {
            tabPrincipal.SelectedIndex = 0;
        }

        private void btnEliminar_Click(object sender, EventArgs e)
        {
            tabPrincipal.SelectedIndex = 1;
        }
        

     


        private void btnActualizar_Click(object sender, EventArgs e)
        {
            tabPrincipal.SelectedIndex = 2;

        }

        private void btnInsertar_Click(object sender, EventArgs e)
        {
            tabPrincipal.SelectedIndex = 3;

        }

        private void frmUser_Load(object sender, EventArgs e)
        {
            tabPrincipal.ItemSize = new Size(0, 1);

            if (usu.rol.CompareTo("Administrador") != 0)
            {
                btnInsertar.Enabled = false;
                btnInsertar.Visible = false;
            }
        }
>>>>>>> David
    }
}